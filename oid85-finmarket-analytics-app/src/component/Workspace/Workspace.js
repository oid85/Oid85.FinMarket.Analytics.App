import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { TrendDynamicScreen } from '../Screens/TrendDynamicScreen'
import { CompareTrendScreen } from '../Screens/CompareTrendScreen'
import { WeekTrendDeltaScreen } from '../Screens/WeekTrendDeltaScreen'
import { PortfolioScreen } from '../Screens/PortfolioScreen'
import { BondAnalyseScreen } from '../Screens/BondAnalyseScreen'
import { ClosePriceDiagramSharesScreen } from '../Screens/ClosePriceDiagramSharesScreen'
import { ClosePriceDiagramIndexesScreen } from '../Screens/ClosePriceDiagramIndexesScreen'
import { FundamentalScreen } from '../Screens/FundamentalScreen'
import { PortfolioBacktestScreen } from '../Screens/PortfolioBacktestScreen'
import { TrendAggregateScreen } from '../Screens/TrendAggregateScreen'
import { AlgoScreen } from '../Screens/AlgoScreen'
import { MomentumScreen } from '../Screens/MomentumScreen'
import { StatArbitrageScreen } from '../Screens/StatArbitrageScreen'
import { MacroScreen } from '../Screens/MacroScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab title='Динамика по дням'>Дни</Tab>
                    <Tab title='Динамика по неделям'>Нед.</Tab>
                    <Tab title='Трендовый агрегат'>Тренд. агр.</Tab>
                    <Tab title='Графики сравнения динамики акций с индексом полной доходности (MCFTR)'>Срав. с MCFTR</Tab>
                    <Tab title='Графики акций'>Граф. (акц.)</Tab>
                    <Tab title='Графики индексов'>Граф. (инд.)</Tab>
                    <Tab title='Фундаментал'>Фунд.</Tab>                    
                    <Tab title='Макро'>Макро</Tab>
                    <Tab title='Аналитика по облигациям'>Облигации</Tab>
                    <Tab title='Портфель акций'>Портфель</Tab>
                    <Tab title='Бектест портфеля'>Бэктест</Tab>
                    <Tab title='Алго'>Алго</Tab>
                    <Tab title='Моментум'>Моментум</Tab>
                    <Tab title='Статистический арбитраж'>Стат. арбитраж</Tab>
                </TabList>
                <TabPanel>
                    <TrendDynamicScreen />                    
                </TabPanel>    
                <TabPanel>
                    <WeekTrendDeltaScreen />
                </TabPanel>
                <TabPanel>
                    <TrendAggregateScreen />
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
                    <FundamentalScreen />
                </TabPanel>                                                                                                                    
                <TabPanel>
                    <MacroScreen />
                </TabPanel>                   
                <TabPanel>
                    <BondAnalyseScreen />
                </TabPanel> 
                <TabPanel>
                    <PortfolioScreen />
                </TabPanel>                            
                <TabPanel>
                    <PortfolioBacktestScreen />
                </TabPanel>          
                <TabPanel>
                    <AlgoScreen />
                </TabPanel>   
                <TabPanel>
                    <MomentumScreen />
                </TabPanel>                     
                <TabPanel>
                    <StatArbitrageScreen />
                </TabPanel>                                                                                                                
            </Tabs>
        </React.Fragment>
    )    
}
