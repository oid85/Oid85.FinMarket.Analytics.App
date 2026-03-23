import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ZAxis, TooltipIndex } from 'recharts';
import { CONSTANTS } from '../../constants';
import './styles.css'

export const BubbleDiagram = ({data}) => {
    return (
        <React.Fragment>          
            <div className='fundamental-by-sector-border-style'>
            <ScatterChart                                    
                data={data}
                height={250}                                                
                width={300}
            >
                <ScatterChart />
                <XAxis dataKey="evEbitda" type="number" />
                <YAxis dataKey="netDebtEbitda" type="number" />
                <ZAxis dataKey="marketCap" type="number" range={[0, 2000]}/>
                <Scatter data={data} stroke={CONSTANTS.COLOR_GREEN} fill={CONSTANTS.COLOR_LIGHTGREEN}>
                    <LabelList dataKey="ticker" fill="black" />
                </Scatter>               
            </ScatterChart>
            </div>
        </React.Fragment>               
    )
}