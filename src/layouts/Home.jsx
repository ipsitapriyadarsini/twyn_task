import React from 'react'
import Sidebar from "../components/sidebarComponent/Sidebar"
import Dashboard from '../pages/Dashboard'
import SwitchScreen from '../components/SwitchScreen'


const Home = () => {
  return (
    <div className='body-main-container'>
      <Sidebar />
      <SwitchScreen />
      {/* <Dashboard /> */}
    </div>
  )
}

export default Home