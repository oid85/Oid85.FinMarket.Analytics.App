import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { AlgoScreen1 } from '../Screens/AlgoScreen1'
import { AlgoScreen2 } from '../Screens/AlgoScreen2'
import './styles.css'

export const AlgoScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                <Tab title='AlgoScreen1'>AlgoScreen1</Tab>
                <Tab title='AlgoScreen2'>AlgoScreen2</Tab>
                </TabList>
                <TabPanel>
                    <AlgoScreen1 />                    
                </TabPanel>     
                <TabPanel>
                    <AlgoScreen2 />                    
                </TabPanel>                                                                                                   
            </Tabs>
        </React.Fragment>
    )     
}
