import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const AlgoBacktestPricePanelDiagram = ({series}) => {
    return (
        <React.Fragment>          
            <div>
            <ComposedChart
                data={series}
                height={330}
                width={850}
            >
                <CartesianGrid />       
                <XAxis dataKey="date" type="category" allowDuplicatedCategory={false} />                
                <YAxis width={45} domain={['auto', 'auto']}/>
                <Legend />
                {
                    series[0]
                    ? 
                    <Line 
                        dataKey="value" 
                        data={series[0].data} 
                        name={series[0].name} 
                        key={series[0].name} 
                        stroke={series[0].color}
                        fill={series[0].colorFill}
                        strokeWidth={3}
                        dot={false}
                    />
                    :
                    <div></div>
                }
                <Tooltip itemSorter={(item) => { return (item.value) * -1 }}/>
            </ComposedChart>
            </div>
        </React.Fragment>                
    )
}