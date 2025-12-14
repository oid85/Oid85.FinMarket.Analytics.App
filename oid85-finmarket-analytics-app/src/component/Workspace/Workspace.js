import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { MainScreen } from '../Screens/MainScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Динамика трендов</Tab>
                </TabList>
                <TabPanel>
                    <MainScreen />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}
