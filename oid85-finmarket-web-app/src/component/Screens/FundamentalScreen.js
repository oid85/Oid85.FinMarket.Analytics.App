import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { FundamentalParameterListScreen } from './FundamentalParameterListScreen'
import { FundamentalParameterCompanyScreen } from './FundamentalParameterCompanyScreen'
import { FundamentalRatingListScreen } from './FundamentalRatingListScreen'
import { FundamentalParameterSectorScreen } from './FundamentalParameterSectorScreen'
import './styles.css'

export const FundamentalScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                <Tab title='Таблица фундаментальных данных'>Фунд. табл.</Tab>
                <Tab title='Фундаментальные данные по компании'>Фунд. комп.</Tab>
                <Tab title='Фундаментальный рейтинг'>Фунд. рейт.</Tab>
                <Tab title='Фундаментальные данные по сектору'>Фунд. сект.</Tab>
                </TabList>
                <TabPanel>
                    <FundamentalParameterListScreen />                    
                </TabPanel>     
                <TabPanel>
                    <FundamentalParameterCompanyScreen />                    
                </TabPanel>       
                <TabPanel>
                    <FundamentalRatingListScreen />                    
                </TabPanel>   
                <TabPanel>
                    <FundamentalParameterSectorScreen />                    
                </TabPanel>                                                                                                                           
            </Tabs>
        </React.Fragment>
    )     
}
