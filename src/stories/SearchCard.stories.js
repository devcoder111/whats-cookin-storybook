import React from "react";
import SearchCard from "../components/SearchCard";
import imageFile from './assets/SearchCard.svg';

export default {
  title: "Search Card",
  component: SearchCard,
  description:
    "A component that displays Offer information with Description. Used on the Search page",
};

const Template = (args) => <SearchCard {...args} />;

export const display = Template.bind({});
display.args = {
  photo:imageFile,
  headline:"Headline",
  subHeadline:"Sub Headline",
  body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lorem felis, ac finibus nisl congue at. Nam tincidunt eros massa, nec commodo nunc convallis quis. Aenean tristique sagittis accumsan. Sed commodo a leo non pulvinar. Suspendisse eu ornare justo, tincidunt vehicula elit. `,
};

export const longDescription = Template.bind({});
longDescription.args = {
  photo:imageFile,
  headline:"Headline",
  subHeadline:"Sub Headline",
  body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lorem felis, ac finibus nisl congue at. Nam tincidunt eros massa, nec commodo nunc convallis quis. Aenean tristique sagittis accumsan. Sed commodo a leo non pulvinar. Suspendisse eu ornare justo, tincidunt vehicula elit. Aenean tristique sagittis accumsan. Sed commodo a leo non pulvinar. Suspendisse eu ornare justo, tincidunt vehicula elit. Suspendisse eu ornare justo, tincidunt vehicula elit. `,
};
