import React from "react";

import ExplorePageSlider from "../components/ExplorePageSlider";

export default {
  title: "Explore Page Slider",
  component: ExplorePageSlider,
};

const Template = (args) => <ExplorePageSlider {...args} />;

export const displayOne = Template.bind({});
displayOne.args = {
  circles: {
    url: "http://localhost:8000/circles/1/",
    name: "TestCircle",
    display_name: "Test Circle",
    purpose: null,
    image: null,
    created_at: "2021-02-17T14:30:10.555806Z",
    updated_at: "2021-02-17T14:30:10.555845Z",
    location: null,
    tags: [],
  },
};
