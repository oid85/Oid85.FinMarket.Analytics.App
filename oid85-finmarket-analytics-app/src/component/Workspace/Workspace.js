import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { TrendDynamicScreen } from '../Screens/TrendDynamicScreen'
import { CompareTrendScreen } from '../Screens/CompareTrendScreen'
import { FundamentalParameterScreen } from '../Screens/FundamentalParameterScreen'
import { FundamentalParameterSectorScreen } from '../Screens/FundamentalParameterSectorScreen'
import { FundamentalParameterCompanyScreen } from '../Screens/FundamentalParameterCompanyScreen'
import { MacroParameterScreen } from '../Screens/MacroParameterScreen'
import { FundamentalParameterBubbleScreen } from '../Screens/FundamentalParameterBubbleScreen'
import { WeekTrendDeltaScreen } from '../Screens/WeekTrendDeltaScreen'
import { PortfolioScreen } from '../Screens/PortfolioScreen'
import { BondPortfolioScreen } from '../Screens/BondPortfolioScreen'
import { BondAnalyseScreen } from '../Screens/BondAnalyseScreen'
import { ClosePriceDiagramSharesScreen } from '../Screens/ClosePriceDiagramSharesScreen'
import { ClosePriceDiagramIndexesScreen } from '../Screens/ClosePriceDiagramIndexesScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Дни</Tab>
                    <Tab>Недели</Tab>                    
                    <Tab>Сравнение</Tab>
                    <Tab>Графики (акции)</Tab>
                    <Tab>Графики (индексы)</Tab>
                    <Tab>Фунд. (табл.)</Tab>
                    <Tab>Фунд. (диагр.)</Tab>
                    <Tab>Фунд. (сектора)</Tab>
                    <Tab>Фунд. (компании)</Tab>
                    <Tab>Макро. (табл.)</Tab>
                    <Tab>Анализ облигаций</Tab>
                    <Tab>Портфель акций</Tab>
                    <Tab>Портфель облигаций</Tab>
                </TabList>
                <TabPanel>
                    <TrendDynamicScreen />                    
                </TabPanel>    
                <TabPanel>
                    <WeekTrendDeltaScreen />
                </TabPanel>
                <TabPanel>
                    <CompareTrendScreen />
                </TabPanel> 
                <TabPanel>
                    <ClosePriceDiagramSharesScreen />
                </TabPanel>      
                <TabPanel>
                    <ClosePriceDiagramIndexesScreen />
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
                    <FundamentalParameterCompanyScreen />
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
