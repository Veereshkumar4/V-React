import React, { Component } from 'react'
import Store from '../Store/Default'
import { observer } from 'mobx-react';
import Card from './Card';

window.store = Store

@observer
export default class Init extends Component {
  render() {
    return (
      <div>
        {Store.names.map((item)=>{
          console.log(item);
         return <Card Name={item}/>
        })}
       
      </div>
    )
  }
}
