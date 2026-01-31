import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { TrendDynamicScreen } from '../Screens/TrendDynamicScreen'
import { CompareTrendScreen } from '../Screens/CompareTrendScreen'
import { FundamentalParameterScreen } from '../Screens/FundamentalParameterScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Фундаментальные параметры</Tab>
                    <Tab>Динамика трендов</Tab>
                    <Tab>Сравнение трендов</Tab>
                </TabList>
                <TabPanel>
                    <FundamentalParameterScreen />
                </TabPanel>                                
                <TabPanel>
                    <TrendDynamicScreen />
                </TabPanel>
                <TabPanel>
                    <CompareTrendScreen />
                </TabPanel>
            </Tabs>
        </React.Fragment>
    )    
}
