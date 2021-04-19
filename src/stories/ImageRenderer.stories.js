import React from "react";

import ImageRenderer from "../components/ImageRenderer/ImageRenderer";

export default {
  title: "Image Renderer",
  component: ImageRenderer,
};

const Template = (args) => <ImageRenderer {...args} />;

export const src = Template.bind({});
src.args = {
  src: "https://picsum.photos/id/237/200/300",
};
