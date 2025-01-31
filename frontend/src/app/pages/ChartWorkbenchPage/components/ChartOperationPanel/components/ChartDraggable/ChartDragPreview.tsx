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

import React from 'react';
import styled from 'styled-components/macro';
import ChartDraggableSourceContainer from './ChartDraggableSourceContainer';

const DragPreview = ({ dataItem }) => {
  return (
    <div>
      {dataItem?.slice(0, 3).map((v, i) => (
        <Preview
          key={v.colName}
          style={{
            zIndex: dataItem.length - i,
            transform: `rotateZ(${-i * 1.5}deg)`,
          }}
        >
          <ChartDraggableSourceContainer
            type={v.type}
            id={v.colName}
            name={v.colName}
          />
        </Preview>
      ))}
    </div>
  );
};

export default DragPreview;

const Preview = styled.div`
  border: 1px solid #fff;
  background: #f2f2f2;
  width: 256px;
  position: absolute;
  transform-origin: bottom left;
  -webkit-backface-visibility: hidden;
`;
