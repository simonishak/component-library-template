import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextBox from "./TextBox";

export default {
  title: "Example/TextBox",
  component: TextBox,
  parameters: {
    text: "Testing from StoryBook",
  },
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = (args) => (
  <TextBox {...args} />
);

export const NormalTextBox = Template.bind({});

NormalTextBox.args = {
  text: "Testing testing",
};
