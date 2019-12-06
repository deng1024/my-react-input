import React from 'react';
import comfirm from '../components/comfirm';

export default class App extends React.Component {
  render() {
    return (
      <div>sdfghjk</div>
    )
  }
  async componentDidMount() {
    let res = await comfirm('确定删除吗？');
    if (res) {
      console.log('yes')
    } else {
      console.log('no')
    }
  }
}