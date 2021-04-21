import React from "react";
import CircleCard from "../components/CircleCard";

export default {
  title: "Circle Card",
  component: CircleCard,
  description:
    "A component that displays circle information. Used on the explore page",
};

const Template = (args) => <CircleCard {...args} />;

export const display = Template.bind({});
display.args = {
  circle: { name: "Hello" },
};
