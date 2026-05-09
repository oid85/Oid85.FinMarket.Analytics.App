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
                    <Tab title='Динамика по дням'>Дни</Tab>
                    <Tab title='Динамика по неделям'>Нед.</Tab>                    
                    <Tab title='Графики сравнения динамики акций с индексом полной доходности (MCFTR)'>Срав.</Tab>
                    <Tab title='Графики акций'>Граф. (А)</Tab>
                    <Tab title='Графики индексов'>Граф. (И)</Tab>
                    <Tab title='Таблица с фундаментальными параметрами компаний'>Фунд. табл.</Tab>                    
                    <Tab title='Аналитика по секторам'>Фунд. сект.</Tab>
                    <Tab title='Аналитика по компаниям'>Фунд. комп.</Tab>
                    <Tab title='Макропараметры'>Макро</Tab>
                    <Tab title='Аналитика по облигациям'>Облиг.</Tab>
                    <Tab title='Портфель акций'>Портф. (А)</Tab>
                    <Tab title='Портфель облигаций'>Портф. (О)</Tab>
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
