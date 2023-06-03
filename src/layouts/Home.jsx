import React from 'react'
import Sidebar from "../components/sidebarComponent/Sidebar"
import SwitchScreen from '../components/SwitchScreen'

const Home = () => {
  return (
    <div className='body-main-container'>
      <Sidebar />
      <SwitchScreen />
    </div>
  )
}

export default Home