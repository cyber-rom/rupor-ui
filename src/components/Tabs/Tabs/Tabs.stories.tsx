import React from 'react';
import {Tabs} from './Tabs';
import {TabLayout} from "../TabLayout/TabLayout";

const tabsArray = [
    {text: 'Первый таб',
        renderContent: () => <TabLayout>Tab1</TabLayout>},
    {text: 'Второй таб',
        renderContent: () => <TabLayout>Tab2</TabLayout>},
    {text: 'Третий таб',
        renderContent: () => <TabLayout>Tab3</TabLayout>}]

export default {
    component: Tabs,
    title: 'Example/Tabs'
}

export const ExampleInput = () => <Tabs tabs={tabsArray}/>