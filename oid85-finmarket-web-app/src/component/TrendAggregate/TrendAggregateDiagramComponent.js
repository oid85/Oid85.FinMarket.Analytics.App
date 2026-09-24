import React from 'react'
import { Bar, Area, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'
import { CONSTANTS } from '../../constants'

export const TrendAggregateDiagramComponent = ({series}) => {
    return (
        <React.Fragment>          
            <div className='trend-aggregate-diagram'>
            <ComposedChart                                    
                data={series}
                height={850}                                                
                width={1900}
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
                        strokeWidth={2}
                        dot={false}                        
                        />
                ))}
                <Tooltip itemSorter={(item) => { return (item.value) * -1 }}/>
            </ComposedChart>
            </div>
        </React.Fragment>                
    )
}