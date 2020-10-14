import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({children},{...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Accordion.Border = function AccordionBorder({children},{...restProps}){
    return <Border {...restProps}>{children}</Border>;
}

Accordion.Header = function AccordionHeader({children},{...restProps}){
    return <Header onClick={() => setToggle()} {...restProps}>{children}</Header>;
}

Accordion.Item = function AccordionItem({children},{...restProps}){

    const [toggleShow, setToggleShow] = useState(false);

    return <Item {...restProps}>{children}</Item>;
}