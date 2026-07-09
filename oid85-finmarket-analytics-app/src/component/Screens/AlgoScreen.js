import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { AlgoPortfolioMonitorScreen } from '../Screens/AlgoPortfolioMonitorScreen'
import { AlgoPortfolioBacktestScreen } from '../Screens/AlgoPortfolioBacktestScreen'
import { AlgoPortfolioOptimizationScreen } from '../Screens/AlgoPortfolioOptimizationScreen'
import './styles.css'

export const AlgoScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                <Tab title='Мониторинг портфеля'>Мониторинг</Tab>
                <Tab title='Бэктест портфеля'>Бэктест</Tab>
                <Tab title='Оптимизация портфеля'>Оптимизация</Tab>
                </TabList>
                <TabPanel>
                    <AlgoPortfolioMonitorScreen />                    
                </TabPanel>     
                <TabPanel>
                    <AlgoPortfolioBacktestScreen />                    
                </TabPanel>       
                <TabPanel>
                    <AlgoPortfolioOptimizationScreen />                    
                </TabPanel>                                                                                                             
            </Tabs>
        </React.Fragment>
    )     
}
