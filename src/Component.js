import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Form} from 'semantic-ui-react';

const Component = ({value}) => (
  <Form>
    <Form.Input name={'FirstName'} value={value} onChange={(e, d) => console.log(d)}/>
  </Form>
);

export default Component;
