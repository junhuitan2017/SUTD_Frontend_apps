import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Converter from './components/Converter'
import LoginForm from './components/LoginForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const tempCallback = (input: any) => {
    console.log(input)
  }

  return (
    <div className='main-app'>
      <div>
        <nav id='navbar'>
          <div className='menu'>
            <Link to='/'>Home</Link>
            <Link to='/converter'>Converter</Link>
            <Link to='/login' id='login'>
              Login
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/converter' element={<Converter />} />
          <Route
            path='/login'
            element={
              <LoginForm
                shouldRemember={true}
                onUsernameChange={tempCallback}
                onPasswordChange={tempCallback}
                onRememberChange={tempCallback}
                onSubmit={tempCallback}
              />
            }
          />
        </Routes>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
