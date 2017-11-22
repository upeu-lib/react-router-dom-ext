/*import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-router-dom-lp2 Demo</h1>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

*/

import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import App from './components/App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
            <App />

    ,
    document.getElementById('demo'));
registerServiceWorker();


