import {action} from "@storybook/addon-actions";
import React from "react";
import {EditableSpan} from "./EditableSpan";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'EditableSpan Component',
    component: EditableSpan
} as ComponentMeta<typeof EditableSpan>

const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args}/>

export const EditableSpanBaseExample = Template.bind({})

EditableSpanBaseExample.args={
    value: 'Start value',
    onChange: action("Value changed")
}