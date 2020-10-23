import React, { Fragment } from "react";

import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import { Feature, Form } from "../components/";

export default function Home() {
  return (
    <Fragment>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <Form action="/sign-in">
            <Form.Textbox placeholder="Enter your Email"></Form.Textbox>
            <Form.Button type="submit">Sign in</Form.Button>
            <Form.Break></Form.Break>
            <Form.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Form.Text>
          </Form>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Fragment>
  );
}
