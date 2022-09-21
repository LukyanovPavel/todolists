import React from "react";
import {ReduxStoreProviderDecorator} from "./stories/ReduxStoreProviderDecorator";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import AppWithRedux from "./AppWithRedux";

export default {
    title: 'AppWithRedux Component',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>

const Template: ComponentStory<typeof AppWithRedux> = () => <AppWithRedux/>

export const AppWithReduxBaseExample = Template.bind({})
