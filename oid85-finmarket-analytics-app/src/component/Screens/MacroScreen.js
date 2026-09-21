import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import './styles.css'
import { MacroParameterScreen } from './MacroParameterScreen'
import { MacroDiagramScreen } from './MacroDiagramScreen'

export const MacroScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                <Tab title='Таблица по макропараметрам'>Макро. табл.</Tab>
                <Tab title='Диаграммы по макропараметрам'>Макро. диагр.</Tab>
                </TabList>
                <TabPanel>
                    <MacroParameterScreen />
                </TabPanel>
                <TabPanel>
                    <MacroDiagramScreen />
                </TabPanel>                                                                                                                             
            </Tabs>
        </React.Fragment>
    )     
}
