import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { TrendDynamicScreen } from '../Screens/TrendDynamicScreen'
import { CompareTrendScreen } from '../Screens/CompareTrendScreen'
import { FundamentalParameterScreen } from '../Screens/FundamentalParameterScreen'
import { FundamentalParameterSectorScreen } from '../Screens/FundamentalParameterSectorScreen'
import { MacroParameterScreen } from '../Screens/MacroParameterScreen'
import { FundamentalParameterBubbleScreen } from '../Screens/FundamentalParameterBubbleScreen'
import { WeekTrendDeltaScreen } from '../Screens/WeekTrendDeltaScreen'
import { PortfolioScreen } from '../Screens/PortfolioScreen'
import { BondPortfolioScreen } from '../Screens/BondPortfolioScreen'
import { BondAnalyseScreen } from '../Screens/BondAnalyseScreen'
import { ClosePriceDiagramScreen } from '../Screens/ClosePriceDiagramScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Недели</Tab>
                    <Tab>Дни</Tab>
                    <Tab>Сравнение</Tab>
                    <Tab>Графики</Tab>
                    <Tab>Фунд. (табл.)</Tab>
                    <Tab>Фунд. (диагр.)</Tab>
                    <Tab>Фунд. (сектора)</Tab>
                    <Tab>Макро. (табл.)</Tab>
                    <Tab>Анализ облигаций</Tab>
                    <Tab>Портфель акций</Tab>
                    <Tab>Портфель облигаций</Tab>
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
                    <ClosePriceDiagramScreen />
                </TabPanel>                                            
                <TabPanel>
                    <FundamentalParameterScreen />
                </TabPanel>  
                <TabPanel>
                    <FundamentalParameterBubbleScreen />
                </TabPanel>
                <TabPanel>
                    <FundamentalParameterSectorScreen />
                </TabPanel>                                                                               
                <TabPanel>
                    <MacroParameterScreen />
                </TabPanel>    
                <TabPanel>
                    <BondAnalyseScreen />
                </TabPanel> 
                <TabPanel>
                    <PortfolioScreen />
                </TabPanel>                 
                <TabPanel>
                    <BondPortfolioScreen />
                </TabPanel>                                                                            
            </Tabs>
        </React.Fragment>
    )    
}
