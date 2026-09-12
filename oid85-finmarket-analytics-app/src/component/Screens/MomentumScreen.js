import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import './styles.css'
import { MomentumMonitorScreen } from './MomentumMonitorScreen'
import { MomentumBacktestScreen } from './MomentumBacktestScreen'

export const MomentumScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab title='Мониторинг моментума'>Мониторинг</Tab>
                    <Tab title='Бектест моментума'>Бектест</Tab>
                </TabList>                
                <TabPanel>
                    <MomentumMonitorScreen />                    
                </TabPanel>
                <TabPanel>
                    <MomentumBacktestScreen />                    
                </TabPanel>                                                                                                                                   
            </Tabs>
        </React.Fragment>
    )     
}
