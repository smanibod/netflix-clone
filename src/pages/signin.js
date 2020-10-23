import React, { Fragment, useState, useContext } from "react";

import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";

import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { SignForm } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <Fragment>
      <HeaderContainer>
        <SignForm>
          <SignForm.Title>Sign In</SignForm.Title>
          {error && <SignForm.Error>{error}</SignForm.Error>}
          <SignForm.Form onSubmit={handleSignin} method="POST">
            <SignForm.Input
              placeholder="Email"
              value={email}
              type="email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <SignForm.Input
              type="password"
              value={password}
              placeholder="Password"
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <SignForm.Button
              disabled={isInvalid}
              type="submit"
              data-testid="sign-in"
            >
              Sign In
            </SignForm.Button>
          </SignForm.Form>
          <SignForm.Text>
            New to Netflix?{" "}
            <SignForm.Link to="/sign-up">Sign up now.</SignForm.Link>
          </SignForm.Text>
          <SignForm.Text>
            --You can try the user: 'tester@email.com///123456' <br></br>to test
            the app without creating a new user--{" "}
          </SignForm.Text>
        </SignForm>
      </HeaderContainer>
      <FooterContainer />
    </Fragment>
  );
}
