import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const MomentumPriceDynamicDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div className='momentum-diagram'>
            <ComposedChart                                    
                data={series}
                height={550}                                                
                width={900}
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