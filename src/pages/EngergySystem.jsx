import React from 'react'
import ParentCard from '../components/cards/ParentCard'
import Sidebar from '../components/sidebarComponent/Sidebar'
import SwitchScreen from '../components/SwitchScreen'
import Card from "../components/cards/Card"

const EngergySystem = () => {
    return (
        <>
            <div className='body-main-container'>
                <Sidebar />
                <SwitchScreen />
                <section className='left-margin'>
                    <div>
                        <h1>Energy Monitoring System</h1>
                    </div>
                    <ParentCard title="Loading Unit" >
                        <Card></Card>
                    </ParentCard>
                    <ParentCard title="Filling Unit">
                        <Card></Card>
                    </ParentCard>
                    <ParentCard title="Dispatch Unit">
                        <Card></Card>
                    </ParentCard>
                </section>
            </div>
        </>
    )
}

export default EngergySystem