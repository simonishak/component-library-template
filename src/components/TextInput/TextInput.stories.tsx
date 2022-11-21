import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";

export default {
  title: "Example/TextInput",
  component: TextInput,
  parameters: {
    text: "Testing from StoryBook",
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const NormalTextInput = Template.bind({});

NormalTextInput.args = {
  placeholder: "Test Placeholder",
  defaultText: "Default text",
};
