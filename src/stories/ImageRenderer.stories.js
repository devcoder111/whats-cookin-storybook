import React from "react";
import ImageRenderer from "../components/ImageRenderer";

export default {
  title: "Rendering image",
  component: ImageRenderer,
};

const Template = (args) => <ImageRenderer {...args} />;

export const src = Template.bind({});
src.args = {
  src: "whats-cookin-storybook/src/stories/assets/WhatsForDinnerLogo.png",
};
