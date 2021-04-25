import React from 'react'

import LogoSmall from '../components/LogoSmall'

export default {
  title: 'Small Logo',
  component: LogoSmall,
}

export const Logo = args => <LogoSmall {...args} />

// export const src = Template.bind({});
// src.args = {
//   src: "https://picsum.photos/id/237/200/300",
// };
