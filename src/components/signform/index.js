import React from 'react';

import { Container, Title, Input, Button, Text, Form, Error, Link} from './styles/signform'

export default function SignForm({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

SignForm.Title = function SignFormTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

SignForm.Input = function SignFormInput({children,...restProps}){
    return <Input {...restProps}>{children}</Input>;
}

SignForm.Button = function SignFormButton({children,...restProps}){
    return <Button {...restProps}>{children}</Button>;
}

SignForm.Text = function SignFormText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>;
}

SignForm.Form = function SignFormForm({children,...restProps}){
    return <Form {...restProps}>{children}</Form>;
}

SignForm.Error = function SignFormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

SignForm.Link = function SignFormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};