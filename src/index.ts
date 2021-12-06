// import { test } from './test'
// test();
// console.log('Hello');
// import img from './assets/image.jpg';

import './style.scss';



let img2 = document.createElement("img");
img2.src = require('./assets/image.jpg');
img2.width = 400;
let root1 = document.querySelector('.root');
root1?.appendChild(img2);
