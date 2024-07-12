import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

// import './bases/01-const-let.ts'
// import './bases/02-objects.ts'
// import './bases/03-arrays.ts'
// import './bases/04-functions.ts'
// import './bases/09-fetch-api.ts'
import './bases/10_axios.ts'
import './bases/11_async-await.ts'




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
  </div>
`


