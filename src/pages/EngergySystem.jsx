import React from 'react'
import Card from "../components/cards/Card"
import ParentCard from '../components/cards/ParentCard'
import Sidebar from '../components/sidebarComponent/Sidebar'
import SwitchScreen from '../components/SwitchScreen'
import Charts from '../helpers/Charts'
import { chartOne, chartTwo, chartThree } from "../arritems.js"

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
                        <Card>
                            <Charts data={chartOne} color={"#BC4772"} />
                        </Card>
                        <Card>
                            <Charts data={chartTwo} color={"#18A0FB"} />
                        </Card>
                        <Card>
                            <Charts data={chartThree} color={"#4D1354"} />
                        </Card>
                    </ParentCard>
                    <ParentCard title="Filling Unit">
                        <Card>
                            <Charts data={chartOne} color={"#BC4772"} />
                        </Card>
                        <Card>
                            <Charts data={chartTwo} color={"#18A0FB"} />
                        </Card>
                        <Card>
                            <Charts data={chartThree} color={"#4D1354"} />
                        </Card>
                    </ParentCard>
                    <ParentCard title="Dispatch Unit">
                        <Card>
                            <Charts data={chartOne} color={"#BC4772"} />
                        </Card>
                        <Card>
                            <Charts data={chartTwo} color={"#18A0FB"} />
                        </Card>
                        <Card>
                            <Charts data={chartThree} color={"#4D1354"} />
                        </Card>
                    </ParentCard>
                </section>
            </div>
        </>
    )
}

export default EngergySystem