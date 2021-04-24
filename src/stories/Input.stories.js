import React from "react";

import { CustomInput } from "./../components/Input";
import { Search, AccountCircle } from "@material-ui/icons";

const NoIcon = () => <noscript />;

const icons = { NoIcon, Search, AccountCircle };
const sizes = ["medium", "small"];

export default {
  title: "Example/CustomInput",
  component: CustomInput,
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: "select",
        labels: {
          NoIcon: "No Icon",
          Search: "Search",
          AccoutnCircle: "User",
        },
      },
    },
    size: {
      options: sizes,
      mapping: icons,
      control: {
        type: "select",
      },
    },
  },
};

const Template = (args) => <CustomInput {...args} />;

export const LargeInput = Template.bind({});
LargeInput.args = {
  isPrimary: true,
  size: "large",
  type: "text",
  id: "circle",
  label: "Circle",
  placeholder: "Search",
  // icon: MagnifyingGlassIcon,
  onChangeCallback: () => {
    // callbacks are mainly for
    // when you want to do analytics or
    // when you want to do some state updates after input has changed
    console.log("clicked on large input");
  },
};

export const SmallInput = Template.bind({});
SmallInput.args = {
  isPrimary: false,
  size: "small",
  type: "text",
  id: "fullname",
  label: "Full Name",
  placeholder: "John Doe",
  onChangeCallback: () => {
    console.log("clicked on small input");
  },
};
