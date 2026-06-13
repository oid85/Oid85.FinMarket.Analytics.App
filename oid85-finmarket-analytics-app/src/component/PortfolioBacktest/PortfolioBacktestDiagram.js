import React from 'react'
import { Area, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const PortfolioBacktestDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div className='portfolio-backtest-diagram'>
            <ComposedChart                                    
                data={series}
                height={850}                                                
                width={1400}
            >
                <CartesianGrid />
                <text 
                    x="7%" 
                    y="5%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    fill="#808080" 
                    fontSize={18}
                >oid85</text>                
                <XAxis dataKey="date" type="category" allowDuplicatedCategory={false} />                
                <YAxis domain={['auto', 'auto']}/>
                <Legend />
                {series.map(s => (
                    <Area 
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