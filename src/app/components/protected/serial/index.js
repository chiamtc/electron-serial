import React, {Component} from 'react';
//import {ipcRenderer} from 'electron';
import * as electron from 'electron';

export default class Serial extends Component {
    constructor(props) {
        super(props);
        console.log('elec?',electron)
    }

    render() {
        electron.ipcRenderer.on('SCR:read-comm', (event, data) => {
            console.log('data',data)
            this.setState({electronObj: data});
        });
        return (<div>
            <p>Hello</p>
        </div>)
    }
}
