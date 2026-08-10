import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { StatArbitragePortfolioRegressionTailScreen } from './StatArbitragePortfolioRegressionTailScreen'
import { StatArbitragePortfolioMonitorScreen } from './StatArbitragePortfolioMonitorScreen'
import { StatArbitragePortfolioBacktestScreen } from './StatArbitragePortfolioBacktestScreen'
import { StatArbitragePortfolioOptimizationScreen } from './StatArbitragePortfolioOptimizationScreen'
import './styles.css'

export const StatArbitrageScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                <Tab title='Остатки регрессии'>Остатки регрессии</Tab>
                <Tab title='Мониторинг портфеля'>Мониторинг</Tab>
                <Tab title='Бэктест портфеля'>Бэктест</Tab>
                <Tab title='Оптимизация портфеля'>Оптимизация</Tab>
                </TabList>
                <TabPanel>
                    <StatArbitragePortfolioRegressionTailScreen />                    
                </TabPanel>                  
                <TabPanel>
                    <StatArbitragePortfolioMonitorScreen />                    
                </TabPanel>     
                <TabPanel>
                    <StatArbitragePortfolioBacktestScreen />                    
                </TabPanel>       
                <TabPanel>
                    <StatArbitragePortfolioOptimizationScreen />                    
                </TabPanel>                                                                                                             
            </Tabs>
        </React.Fragment>
    )     
}
