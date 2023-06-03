import React from 'react'
import Card from '../components/cards/Card'
import Sidebar from '../components/sidebarComponent/Sidebar'
import SwitchScreen from '../components/SwitchScreen'

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
                    <Card title="Loading Unit" >
                        <div>hello</div>
                    </Card>
                    <Card />
                    <Card />
                </section>
            </div>
        </>
    )
}

export default EngergySystem