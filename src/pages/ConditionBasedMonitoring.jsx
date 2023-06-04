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


const cardValue = [{
    title: "Loading Unit",
    image: Table1,
    minicardData: [
        {

            icon: <BsThermometerHigh />,
            dataValue: "53°C"
        },
        {

            icon: <FcNfcSign />,
            dataValue: "2.5°"
        },
        {

            icon: <FcFlashOn />,
            dataValue: "6 A"
        },
        {

            icon: <FcChargeBattery />,
            dataValue: "24 V"
        },
        {

            icon: <FaPlug />,
            dataValue: "150W"
        },
    ]
}, {
    title: "Filling Unit Motor",
    image: Table2,
    minicardData: [
        {

            icon: <BsThermometerHigh />,
            dataValue: "53°C"
        },
        {

            icon: <FcNfcSign />,
            dataValue: "2.5°"
        },
        {

            icon: <FcFlashOn />,
            dataValue: "6 A"
        },
        {

            icon: <FcChargeBattery />,
            dataValue: "24 V"
        },
        {

            icon: <FaPlug />,
            dataValue: "150W"
        },
    ]
}, {
    title: "Dispatch Unit Motor",
    image: Table3,
    minicardData: [
        {

            icon: <BsThermometerHigh />,
            dataValue: "53°C"
        },
        {

            icon: <FcNfcSign />,
            dataValue: "2.5°"
        },
        {

            icon: <FcFlashOn />,
            dataValue: "6 A"
        },
        {

            icon: <FcChargeBattery />,
            dataValue: "24 V"
        },
        {

            icon: <FaPlug />,
            dataValue: "150W"
        },
    ]
}]


const ConditionBasedMonitoring = () => {
    return (
        <div className='body-main-container'>
            <Sidebar />
            <SwitchScreen />
            <section className='left-margin'>
                <div>
                    <h1>Condition Based Monitoring</h1>
                </div>
                {cardValue.map((item, i) => (

                    <ParentCard title={item.title} key={i}>
                        <div className='display-items-center'>
                            <div className='margin_left'>
                                <img className="image_size" src={item.image} alt={item.title} />
                            </div>
                            {item.minicardData.map((val, idx) => (
                                <MiniCard key={idx}>
                                    <div className='icon_box'>{val.icon}</div>
                                    <div className="font_size">{val.dataValue}</div>
                                </MiniCard>))}
                        </div>
                    </ParentCard>
                ))}
            </section>
        </div>
    )
}

export default ConditionBasedMonitoring