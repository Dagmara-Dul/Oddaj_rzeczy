import React, {Component} from 'react';

import HelloUser from './HelloUser';
import MainMenu from './../StartSection/MainMenu';
import MasterForm from '../DonateForm/MasterForm';


export default class LoggedSite extends Component{
    render(){
        return(
            <>
                <HelloUser />
                <MainMenu />
                <MasterForm />
                
            </>
        )
    }
}