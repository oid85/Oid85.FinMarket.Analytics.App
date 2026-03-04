import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { TrendDynamicScreen } from '../Screens/TrendDynamicScreen'
import { CompareTrendScreen } from '../Screens/CompareTrendScreen'
import { FundamentalParameterScreen } from '../Screens/FundamentalParameterScreen'
import { MacroParameterScreen } from '../Screens/MacroParameterScreen'
import { FundamentalParameterBubbleScreen } from '../Screens/FundamentalParameterBubbleScreen'
import { WeekTrendDeltaScreen } from '../Screens/WeekTrendDeltaScreen'
import { PortfolioScreen } from '../Screens/PortfolioScreen'
import { BondAnalyseScreen } from '../Screens/BondAnalyseScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Недели</Tab>
                    <Tab>Динамика</Tab>
                    <Tab>Сравнение</Tab>                    
                    <Tab>Фунд. (табл.)</Tab>
                    <Tab>Фунд. (диагр.)</Tab>                    
                    <Tab>Макро. (табл.)</Tab>
                    <Tab>Модель портфеля</Tab>
                    <Tab>Анализ облигаций</Tab>
                </TabList>
                <TabPanel>
                    <WeekTrendDeltaScreen />
                </TabPanel>    
                <TabPanel>
                    <TrendDynamicScreen />
                </TabPanel>
                <TabPanel>
                    <CompareTrendScreen />
                </TabPanel>                             
                <TabPanel>
                    <FundamentalParameterScreen />
                </TabPanel>  
                <TabPanel>
                    <FundamentalParameterBubbleScreen />
                </TabPanel>                                                               
                <TabPanel>
                    <MacroParameterScreen />
                </TabPanel>   
                <TabPanel>
                    <PortfolioScreen />
                </TabPanel>  
                <TabPanel>
                    <BondAnalyseScreen />
                </TabPanel>                                                           
            </Tabs>
        </React.Fragment>
    )    
}
