import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const MomentumBacktestDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div className='momentum-diagram'>
            <ComposedChart                                    
                data={series}
                height={600}                                                
                width={1050}
            >
                <CartesianGrid />       
                <XAxis dataKey="date" type="category" allowDuplicatedCategory={false} />                
                <YAxis domain={['auto', 'auto']}/>
                <Legend />
                {series.map(s => (
                    <Bar 
                        dataKey="value" 
                        data={s.data} 
                        name={s.name} 
                        key={s.name} 
                        stroke={s.color}
                        fill={s.colorFill}
                        strokeWidth={5}
                        dot={false}                        
                        />
                ))}
                <Tooltip itemSorter={(item) => { return (item.value) * -1 }}/>
            </ComposedChart>
            </div>
        </React.Fragment>                
    )
}