import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const CompareTrendDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div className='compare-trend-diagram'>
            <LineChart                                    
                data={series}
                height={850}                                                
                width={1700}
            >
                <CartesianGrid />
                <XAxis dataKey="date" type="category" allowDuplicatedCategory={false} />                
                <YAxis domain={['auto', 'auto']}/>
                <Legend />
                {series.map(s => (
                    <Line 
                        dataKey="value" 
                        data={s.data} 
                        name={s.name} 
                        key={s.name} 
                        stroke={s.color}
                        strokeWidth={2}
                        dot={false}                        
                        />
                ))}
                <Tooltip itemSorter={(item) => { return (item.value) * -1 }}/>
            </LineChart>
            </div>
        </React.Fragment>                
    )
}