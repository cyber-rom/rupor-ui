import React, {FC} from 'react';
import {TabLayoutContainer} from "../Tabs.styles";

const TabLayout: FC = ({children}) => {
    return <TabLayoutContainer>{children}</TabLayoutContainer>
}

export {TabLayout}