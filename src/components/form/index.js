import React from 'react';

import {Container, Textbox, Button, Break, Text} from './styles/form'

export default function Form({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Form.Textbox = function FormTextbox({children,...restProps}){
    return <Textbox {...restProps}>{children}</Textbox>;
}

Form.Button = function FormButton({children,...restProps}){
    return <Button {...restProps}>{children}</Button>;
}

Form.Break = function FormBreak({ ...restProps }) {
    return <Break {...restProps} />;
  };

  Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };