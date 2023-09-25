import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="text-3xl bg-black text-white px-4 py-4">Hello Vite!</h1>
    <div class="">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p class="read-the-docs">
    <strong>I am extra text</strong>
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

console.log('Server is running in ' + import.meta.env.MODE);
console.log(import.meta.env);

if (import.meta.env.DEV) {
    console.log('This is Dev Server');
}

const dbName = import.meta.env.VITE_DBNAME;
console.log('dbName:', dbName)
