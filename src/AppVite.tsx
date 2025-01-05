import { useState } from 'react'
import { NavLink } from "react-router";
import viteLogo from '/electron-vite.animate.svg'
import './App.css'

function AppVite() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <NavLink to={'/react'}>
        Ir a la pagina de React
      </NavLink>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default AppVite
