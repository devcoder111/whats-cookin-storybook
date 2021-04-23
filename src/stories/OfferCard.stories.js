import React from "react";
import OfferCard from "../components/OfferCard";
import imageFile from './assets/SearchCard.svg';

export default {
  title: "Offer Card",
  component: OfferCard,
  description:
    "A component that displays Offer information. Used on the Home page",
};

const Template = (args) => <OfferCard {...args} />;

export const display = Template.bind({});
display.args = {
  photo: imageFile,
  title:"Headline",
  date: "3th sep",
  time: "8:00pm",
  by: "Ahmed Hany",
  isHeart:true,
  isPaid:false,
  Des :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
};

export const display2 = Template.bind({});
display2.args = {
  photo: imageFile,
  title:"Headline",
  date: "3th sep",
  time: "8:00pm",
  by: "Ahmed Hany",
  isHeart:false,
  isPaid:true,
};
