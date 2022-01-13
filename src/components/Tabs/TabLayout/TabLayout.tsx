import React, {FC} from 'react';
import styled from 'styled-components';

const TabLayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #3b3d42;
`


const TabLayout: FC = ({children}) => {
    return <TabLayoutContainer>{children}</TabLayoutContainer>
}

export {TabLayout}