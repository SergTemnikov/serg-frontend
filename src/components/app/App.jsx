import React from 'react'
import {Header, Social} from '../../components'
import '../../scss/app.scss'

const App = () => {
  return (
    <div className="app">
      <Social />
      <div className="app__content container">
        <Header />
        <div className="app__avatar">
          <img src="../../img/Avatar1.png" alt="avatar" />
        </div>
      </div>
    </div>
  )
}

export default App