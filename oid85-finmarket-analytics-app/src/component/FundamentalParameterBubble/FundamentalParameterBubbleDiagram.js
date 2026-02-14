import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ZAxis, TooltipIndex } from 'recharts';
import './styles.css'

export const FundamentalParameterBubbleDiagram = ({data}) => {
console.log(data)
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
                <Scatter data={data} fill="green">
                    <LabelList dataKey="ticker" fill="black" />
                </Scatter>               
            </ScatterChart>
            </div>
        </React.Fragment>               
    )
}