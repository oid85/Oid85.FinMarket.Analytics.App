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
import { MacroDiagramScreen } from '../Screens/MacroDiagramScreen'
import { WeekTrendDeltaScreen } from '../Screens/WeekTrendDeltaScreen'
import { PortfolioScreen } from '../Screens/PortfolioScreen'
import { BondAnalyseScreen } from '../Screens/BondAnalyseScreen'
import { ClosePriceDiagramSharesScreen } from '../Screens/ClosePriceDiagramSharesScreen'
import { ClosePriceDiagramIndexesScreen } from '../Screens/ClosePriceDiagramIndexesScreen'
import { FundamentalRatingScreen } from '../Screens/FundamentalRatingScreen'
import { PortfolioBacktestScreen } from '../Screens/PortfolioBacktestScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab title='Динамика по дням'>Дни</Tab>
                    <Tab title='Динамика по неделям'>Нед.</Tab>                    
                    <Tab title='Графики сравнения динамики акций с индексом полной доходности (MCFTR)'>Срав. с MCFTR</Tab>
                    <Tab title='Графики акций'>Граф. (акц.)</Tab>
                    <Tab title='Графики индексов'>Граф. (инд.)</Tab>
                    <Tab title='Таблица с фундаментальными параметрами компаний'>Фунд. табл.</Tab>                    
                    <Tab title='Аналитика по секторам'>Фунд. сект.</Tab>
                    <Tab title='Аналитика по компаниям'>Фунд. комп.</Tab>
                    <Tab title='Рейтинг по фундаментальным данным'>Фунд. рейт.</Tab>
                    <Tab title='Таблица по макропараметрам'>Макро. табл.</Tab>
                    <Tab title='Диаграммы по макропараметрам'>Макро. диагр.</Tab>
                    <Tab title='Аналитика по облигациям'>Облигации</Tab>
                    <Tab title='Портфель акций'>Портфель</Tab>
                    <Tab title='Бектест портфеля'>Бэктест</Tab>
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
                    <FundamentalParameterSectorScreen />
                </TabPanel>       
                <TabPanel>
                    <FundamentalParameterCompanyScreen />
                </TabPanel>        
                <TabPanel>
                    <FundamentalRatingScreen />
                </TabPanel>                                                                                                     
                <TabPanel>
                    <MacroParameterScreen />
                </TabPanel>
                <TabPanel>
                    <MacroDiagramScreen />
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
            </Tabs>
        </React.Fragment>
    )    
}
