import React, { Component } from 'react'
import Init from './Components/Init';
import Store from './Store/Default';
import { Observer } from 'mobx-react';

Observer
export default class Start extends Component {
  render() {
    return (
      <div>      
            <Init/>               
      </div>
    )
  }
}
