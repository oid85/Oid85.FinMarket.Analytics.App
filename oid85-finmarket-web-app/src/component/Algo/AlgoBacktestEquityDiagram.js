import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const AlgoBacktestEquityDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div>
            <ComposedChart
                data={series}
                height={330}
                width={1250}
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