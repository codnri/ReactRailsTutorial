console.log('Hello World from Webpacker')

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />, // 独自に記述した App クラス (../components/app.jsx)を指定
    document.getElementById('example-app')  // example-app をマウントポイントにする
  )
})