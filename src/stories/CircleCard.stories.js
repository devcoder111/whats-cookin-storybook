import React from "react";

import CircleCard from "../components/ImageRenderer/ImageRenderer";

export default {
  title: "Circle Card",
  component: CircleCard,
  argTypes: {
    circle: { control: { name: "test" } },
    name: "Test",
  },
};

const Template = (args) => <CircleCard {...args} />;

export const display = Template.bind({});
display.args = {
  circle: {},
  setPinAsCenter: null,
};
