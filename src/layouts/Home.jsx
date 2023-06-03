import React from 'react'
import Sidebar from "../components/sidebarComponent/Sidebar"
import Dashboard from '../pages/Dashboard'
import SwitchScreen from '../components/SwitchScreen'
import EngergySystem from '../pages/EngergySystem'


const Home = () => {
  return (
    <div className='body-main-container'>
      <Sidebar />
      <SwitchScreen />
      {/* <Dashboard /> */}
      <section className='left-margin'><EngergySystem /></section>

    </div>
  )
}

export default Home