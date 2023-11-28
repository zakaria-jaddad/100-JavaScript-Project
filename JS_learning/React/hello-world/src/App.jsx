import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)

return (
    <>
    <h1 className="
        // bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
        font-bold
        px-3`
        py-4
        rounded-md
    ">Hello Zakaria From React</h1>
    <div className="
        my-4
        flex
        justify-center
    ">
        <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
        <button className='
            mb-4
        ' 
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>
        <p>
        Edit <code>src/App.jsx</code> and save to test HMR
        </p>
    </div>
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
    </p>
    </>
)
}

export default App
