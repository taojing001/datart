/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  DatabaseOutlined,
  FunctionOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { PaneWrapper } from 'app/components';
import useI18NPrefix from 'app/hooks/useI18NPrefix';
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components/macro';
import { EditorContext } from '../../EditorContext';
import { ColumnPermissions } from './ColumnPermissions';
import { Resource } from './Resource';
import { Variables } from './Variables';
import { VerticalTabs } from './VerticalTabs';

interface PropertiesProps {
  allowManage: boolean;
}

export const Properties = memo(({ allowManage }: PropertiesProps) => {
  const [selectedTab, setSelectedTab] = useState('');
  const { editorInstance } = useContext(EditorContext);
  const t = useI18NPrefix('view.properties');

  useEffect(() => {
    editorInstance?.layout();
  }, [editorInstance, selectedTab]);

  const tabTitle = useMemo(
    () => [
      { name: 'reference', title: t('reference'), icon: <DatabaseOutlined /> },
      { name: 'variable', title: t('variable'), icon: <FunctionOutlined /> },
      {
        name: 'columnPermissions',
        title: t('columnPermissions'),
        icon: <SafetyCertificateOutlined />,
      },
    ],
    [t],
  );

  const tabSelect = useCallback(tab => {
    setSelectedTab(tab);
  }, []);

  return allowManage ? (
    <Container>
      <PaneWrapper selected={selectedTab === 'variable'}>
        <Variables />
      </PaneWrapper>
      <PaneWrapper selected={selectedTab === 'reference'}>
        <Resource />
      </PaneWrapper>
      <PaneWrapper selected={selectedTab === 'columnPermissions'}>
        <ColumnPermissions />
      </PaneWrapper>
      <VerticalTabs tabs={tabTitle} onSelect={tabSelect} />
    </Container>
  ) : null;
});

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  background-color: ${p => p.theme.componentBackground};
`;
