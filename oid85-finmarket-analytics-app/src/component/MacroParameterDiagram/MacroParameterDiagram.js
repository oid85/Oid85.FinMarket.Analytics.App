import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaMacroParameterDiagram } from '../../redux/actions/macroParameterActions'
import Loader from '../Loader/Loader'
import { MacroParameterDiagramComponent } from './MacroParameterDiagramComponent'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const MacroParameterDiagram = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const macroParameterDiagramData = useSelector(state => state.macroParameter.macroParameterDiagramData)

    useEffect(() => {
        dispatch(sagaMacroParameterDiagram())
    }, [])

    return (
        <React.Fragment>
        {
            !macroParameterDiagramData.result || loading
            ? <Loader/>
            :
            <div className='macro-diagram-container border-style'>
                <MacroParameterDiagramComponent series={macroParameterDiagramData.result.series}/>
                <MacroParameterDiagramComponent series={macroParameterDiagramData.result.vvpSeries}/>
            </div>        
        }
        </React.Fragment>                
    )
}