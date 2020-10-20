import React, { Fragment } from 'react';
import * as ROUTES from '../constants/routes'
import { Header } from '../components'
import logo from '../logo.png'


export function SelectProfileContainer({user,setProfile}){
    return <Fragment>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix'/>
            </Header.Frame>
        </Header>
    </Fragment>
}