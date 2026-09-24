import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const MomentumPriceWithStopDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div className='momentum-diagram'>
            <ComposedChart                                    
                data={series}
                height={170}
                width={187}
            >        
                <XAxis hide={true} dataKey="date" type="category" allowDuplicatedCategory={false} />         
                <YAxis hide={true} domain={['auto', 'auto']}/>
                {
                    series[0]
                    ? 
                    <Area 
                        type="monotone"
                        dataKey="value" 
                        data={series[0].data} 
                        name={series[0].name} 
                        key={series[0].name} 
                        stroke={series[0].color}
                        fill={series[0].colorFill}
                        strokeWidth={1}
                        dot={false}
                        />
                    :
                    <div></div>
                }                  
                {
                    series[1]
                    ? 
                    <Line 
                        type="monotone"
                        dataKey="value" 
                        data={series[1].data} 
                        name={series[1].name} 
                        key={series[1].name} 
                        stroke={series[1].color}
                        fill={series[1].colorFill}
                        strokeWidth={1}
                        dot={false}
                        />
                    :
                    <div></div>
                } 
                {
                    series[2]
                    ? 
                    <Line 
                        type="monotone"
                        dataKey="value" 
                        data={series[2].data} 
                        name={series[2].name} 
                        key={series[2].name} 
                        stroke={series[2].color}
                        fill={series[2].colorFill}
                        strokeWidth={1}
                        dot={false}
                        />
                    :
                    <div></div>
                }                
            </ComposedChart>
            </div>
        </React.Fragment>                
    )
}