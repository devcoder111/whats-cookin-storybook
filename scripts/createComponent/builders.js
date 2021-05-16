/* eslint-disable max-len */
/* This file contains the functions which generate the output of each file */
module.exports = {
    // Output generated for component's definition file
    buildJS: componentName =>
  `import React from 'react';
  import PropTypes from 'prop-types';
  import {useStyles} from './styles.js';
  
  function ${componentName}() {
    const classes = useStyles()
    return <div></div>
  }
  ${componentName}.propTypes = {
    //Prop Types Here
  };
  ${componentName}.defaultProps = {
    //Default Props Here
  };
  export default ${componentName}
  `,
  
    // Output generated for Story File
    buildStoryJs: componentName =>
`import React from 'react';
import ${componentName} from '..Component.js';


export default {
    component: ${componentName},
    title: '${componentName}',
  };


const Template = (args) => <${componentName} {...args} />;
export const Default = Template.bind({});
/** Default ${componentName} supplied with only required args  Follow this pattern for additional args...*/
Default.args = {
    children: '',
  };
  `,
  buildCss: componentName => `.${componentName}Wrapper {}`,
    buildStyle: componentName =>
      `import { makeStyles } from "@material-ui/core";
      export const useStyles = makeStyles({})`,
  }