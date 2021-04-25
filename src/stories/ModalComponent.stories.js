import React from 'react'

import ModalComponent from '../components/ModalComponent'

export default {
  title: 'Modal Component',
  component: ModalComponent,
  description:
    'A component that displays a popup modal. To be used to provide consistency for user interaction',
}

export const Template = args => (
  <ModalComponent {...args}>Why Hello there!</ModalComponent>
)

export const Functional = Template.bind({})
Functional.args = {
  children: 'Hello All',
  open: false,
  setOpen: {open: false},
}
