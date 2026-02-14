import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { TrendDynamicScreen } from '../Screens/TrendDynamicScreen'
import { CompareTrendScreen } from '../Screens/CompareTrendScreen'
import { FundamentalParameterScreen } from '../Screens/FundamentalParameterScreen'
import { FundamentalParameterBubbleScreen } from '../Screens/FundamentalParameterBubbleScreen'
import { WeekTrendDeltaScreen } from '../Screens/WeekTrendDeltaScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Недели</Tab>
                    <Tab>Фунд. (табл.)</Tab>
                    <Tab>Фунд. (диагр.)</Tab>                    
                    <Tab>Динамика</Tab>
                    <Tab>Сравнение</Tab>                    
                </TabList>
                <TabPanel>
                    <WeekTrendDeltaScreen />
                </TabPanel>                
                <TabPanel>
                    <FundamentalParameterScreen />
                </TabPanel>  
                <TabPanel>
                    <FundamentalParameterBubbleScreen />
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
