import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const PortfolioRebalanceDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div className='portfolio-rebalance-diagram'>
            <LineChart                                    
                data={series}
                height={850}                                                
                width={1900}
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