import React from 'react';
import WCButton from './WCButton';


export default {
    component: WCButton,
    title: 'WCButton',
  };


const Template = (args) => <WCButton {...args} />;
export const Default = Template.bind({});
/** Default WCButton supplied with only required args  Follow this pattern for additional args...*/

export const Disabled = Template.bind({})
Disabled.args ={
  disabled: true
};

export const WithFunction = Template.bind({})
WithFunction.args = {
  onClick: ()=>{alert('Hello')}
}

export const FunkyColors = Template.bind({})
FunkyColors.args = {
  style: {backgroundColor: 'pink', color: 'purple'}
}
  