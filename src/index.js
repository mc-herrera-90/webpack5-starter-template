import webpackLogo from './assets/webpack-logo.svg';
import './assets/style.css';

document.body.innerHTML = /*html*/`
<h1>Mi proyecto con Webpack 5</h1>
<div>
  <a href="https://webpack.js.org/" target="_blank" >
    <img src=${webpackLogo} alt="logo" class="logo" />
  </a>
</div>`

console.log("Hello, Webpack!");