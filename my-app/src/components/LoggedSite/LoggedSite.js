import React, {Component} from 'react';

import HelloUser from './HelloUser';
import MainMenu from './../StartSection/MainMenu';
import MasterFormChanged from '../DonateForm/MasterFormChanged';


export default class LoggedSite extends Component{
    render(){
        return(
            <>
                <HelloUser />
                <MainMenu />
                <MasterFormChanged />
                
            </>
        )
    }
}