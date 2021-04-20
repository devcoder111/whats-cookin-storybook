import React from "react";

import CircleCard from "../components/ImageRenderer/ImageRenderer";

export default {
  title: "Circle Card",
  component: CircleCard,
};

const Template = (args) => <CircleCard {...args} />;

export const display = Template.bind({});
display.args = {
  name: "Test",
  circle: {
    name: "Test",
  },
  setPinAsCenter: null,
};
