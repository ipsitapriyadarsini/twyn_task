import React from 'react'
import MiniCard from '../components/cards/MIniCards'
import ParentCard from '../components/cards/ParentCard'
import Sidebar from '../components/sidebarComponent/Sidebar'
import SwitchScreen from '../components/SwitchScreen'
import Table1 from "../assets/images/table1.jpg"
import Table2 from "../assets/images/table2.jpg"
import Table3 from "../assets/images/table3.jpg"

const ConditionBasedMonitoring = () => {
    return (
        <div className='body-main-container'>
            <Sidebar />
            <SwitchScreen />
            <section className='left-margin'>
                <div>
                    <h1>Condition Based Monitoring</h1>
                </div>
                <ParentCard title="Loading Unit" >
                    <div className='margin_left'>
                        <img src={Table1} alt="" />
                        </div>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                </ParentCard>
                <ParentCard title="Filling Unit">
                    <div className='margin_left'>
                        <img src={Table2} alt="" /></div>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                </ParentCard>
                <ParentCard title="Dispatch Unit">
                    <div className='margin_left'>
                        <img src={Table3} alt="" /></div>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                    <MiniCard></MiniCard>
                </ParentCard>
            </section>
        </div>
    )
}

export default ConditionBasedMonitoring