import React from 'react'
import { MiniCard } from '../components/cards/Card'
import ParentCard from '../components/cards/ParentCard'
import Sidebar from '../components/sidebarComponent/Sidebar'
import SwitchScreen from '../components/SwitchScreen'
import Table1 from "../assets/images/table1.jpg"
import Table2 from "../assets/images/table2.jpg"
import Table3 from "../assets/images/table3.jpg"
import { BsThermometerHigh } from 'react-icons/bs';
import { FcFlashOn, FcChargeBattery, FcNfcSign } from 'react-icons/fc'
import { FaPlug } from "react-icons/fa"


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
                    <div className='display-items-center'>
                        <div className='margin_left'>
                            <img src={Table1} alt="" />
                        </div>
                        <MiniCard>
                            <div className='icon_box'><BsThermometerHigh /></div>
                            <div>53°C</div>
                        </MiniCard>
                        <MiniCard><div className='icon_box'><FcNfcSign /></div>
                            <div>53°C</div></MiniCard>
                        <MiniCard><div className='icon_box'><FcFlashOn /></div>
                            <div>53°C</div></MiniCard>
                        <MiniCard><div className='icon_box'><FcChargeBattery /></div>
                            <div>53°C</div></MiniCard>
                        <MiniCard><div className='icon_box'><FaPlug /></div>
                            <div>53°C</div></MiniCard>
                    </div>
                </ParentCard>
                <ParentCard title="Filling Unit">
                    <div className='display-items-center'>
                        <div className='margin_left'>
                            <img src={Table2} alt="" />
                        </div>
                        <MiniCard>
                            <div className='icon_box'><BsThermometerHigh /></div>
                            <div>53°C</div>
                        </MiniCard>
                        <MiniCard><div className='icon_box'><FcNfcSign /></div>
                            <div>53°C</div></MiniCard>
                        <MiniCard><div className='icon_box'><FcFlashOn /></div>
                            <div>53°C</div></MiniCard>
                        <MiniCard><div className='icon_box'><FcChargeBattery /></div>
                            <div>53°C</div></MiniCard>
                        <MiniCard><div className='icon_box'><FaPlug /></div>
                            <div>53°C</div></MiniCard>
                    </div>
                </ParentCard>
                <ParentCard title="Dispatch Unit">
                    <div className='display-items-center'>
                        <div className='margin_left'>
                            <img src={Table3} alt="" />
                        </div>
                        <MiniCard>
                            <div className='icon_box'><BsThermometerHigh /></div>
                            <div>53°C</div>
                        </MiniCard>
                        <MiniCard><div className='icon_box'><FcNfcSign /></div>
                            <div>53°C</div></MiniCard>
                        <MiniCard><div className='icon_box'><FcFlashOn /></div>
                            <div>53°C</div></MiniCard>
                        <MiniCard><div className='icon_box'><FcChargeBattery /></div>
                            <div>53°C</div></MiniCard>
                        <MiniCard><div className='icon_box'><FaPlug /></div>
                            <div>53°C</div></MiniCard>
                    </div>
                </ParentCard>
            </section>
        </div>
    )
}

export default ConditionBasedMonitoring