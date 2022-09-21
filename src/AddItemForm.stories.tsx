import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'AddItemForm Component',
    component: AddItemForm,
} as ComponentMeta<typeof AddItemForm>


const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args}/>

export const AddItemFormBaseExample = Template.bind({})

AddItemFormBaseExample.args = {
    addItem: action("Button 'add' was pressed inside the form")
}