import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ZAxis, TooltipIndex } from 'recharts';
import { CONSTANTS } from '../../constants';
import './styles.css'

export const FundamentalParameterBubbleDiagram = ({data}) => {
    return (
        <React.Fragment>          
            <div className='fundamental-parameter-bubble-diagram'>
            <ScatterChart                                    
                data={data}
                height={850}                                                
                width={1900}
            >
                <ScatterChart />
                <XAxis dataKey="evEbitda" type="number" />
                <YAxis dataKey="netDebtEbitda" type="number" />
                <ZAxis dataKey="marketCap" type="number" range={[0, 2000]}/>
                <Scatter data={data} stroke={CONSTANTS.COLOR_GREEN} fill={CONSTANTS.COLOR_LIGHTGREEN}>
                    <LabelList dataKey="ticker" fill="black" fontSize={10} />
                </Scatter>               
            </ScatterChart>
            </div>
        </React.Fragment>               
    )
}