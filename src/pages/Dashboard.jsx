import React from 'react'
import "../assets/css/dashboard.css"
import Sidebar from '../components/sidebarComponent/Sidebar'
import SwitchScreen from '../components/SwitchScreen'



const Dashboard = () => {
  return (
    <>
      <div className='body-main-container'>
        <Sidebar />
        <SwitchScreen />
        <section className='left-margin'>
        <div className='dashboard-heading'>
          <h1>Dashboard Home</h1>
        </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard