import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const StatArbitrageBacktestDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div>
            <ComposedChart                                    
                data={series}
                height={500}                                                
                width={1515}
            >
                <CartesianGrid />       
                <XAxis dataKey="date" type="category" allowDuplicatedCategory={false} />                
                <YAxis width={45} domain={['auto', 'auto']}/>
                <Legend />
                {series.map(s => (
                    <Bar 
                        dataKey="value" 
                        data={s.data} 
                        name={s.name} 
                        key={s.name} 
                        stroke={s.color}
                        fill={s.colorFill}
                        strokeWidth={3}
                        dot={false}                        
                        />
                ))}
                <Tooltip itemSorter={(item) => { return (item.value) * -1 }}/>
            </ComposedChart>
            </div>
        </React.Fragment>                
    )
}