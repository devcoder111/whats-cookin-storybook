import React from 'react'
import NotificationCard from './NotificationCard'

export default {
  component: NotificationCard,
  title: 'NotificationCard',
}

const Template = args => <NotificationCard {...args} />
export const Default = Template.bind({})
Default.args = {
  notify_type: 'conversation',
  offer_id: 100,
  notify_date: '2021-05-06T15:52:34.392568Z',
  text:
    "From Carolina Yael Evelyn : I MADE TOO MANY TACOS!!! HELP!!! : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  offer_title: 'I MADE TOO MANY TACOS!!! HELP!!!',
}
/** Default NotificationCard supplied with only required args  Follow this pattern for additional args...*/
