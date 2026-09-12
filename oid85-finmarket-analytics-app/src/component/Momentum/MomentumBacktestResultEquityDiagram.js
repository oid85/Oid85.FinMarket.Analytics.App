import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const MomentumBacktestResultEquityDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div className='momentum-diagram'>
            <ComposedChart                                    
                data={series}
                height={800}
                width={1000}
            >
                <XAxis dataKey="date" type="category" allowDuplicatedCategory={false} />                
                <YAxis domain={['auto', 'auto']}/>
                {series.map(s => (
                    <Line 
                        type="monotone"
                        dataKey="value" 
                        data={s.data} 
                        name={s.name} 
                        key={s.name} 
                        stroke={s.color}
                        fill={s.colorFill}
                        strokeWidth={1}
                        dot={false}                        
                        />
                ))}
                <Tooltip itemSorter={(item) => { return (item.value) * -1 }}/>
            </ComposedChart>
            </div>
        </React.Fragment>                
    )
}