import React from 'react'
import { Bar, Area, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

let series = [
    {
        "name": "Тариф на эл. энергию Томск, руб",
        "color": "#191970",
        "colorFill": "#357EC7",
        "data": [
            { "date": "2016", "value": 2.93 },
            { "date": "2017", "value": 3.10 },
            { "date": "2018", "value": 3.25 },
            { "date": "2019", "value": 3.42 },
            { "date": "2020", "value": 3.50 },
            { "date": "2021", "value": 3.66 },
            { "date": "2022", "value": 3.85 },
            { "date": "2023", "value": 4.39 },
            { "date": "2024", "value": 4.39 },
            { "date": "2025", "value": 4.78 },
            { "date": "2026", "value": 5.46 }
        ]
    }
]

export const BarTarifElMacroParameterDiagramComponent = () => {
    return (
        <React.Fragment>          
            <div className='macro-diagram'>
            <ComposedChart                                    
                data={series}
                height={300}                                                
                width={900}
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
                        label={{ position: "insideTop", fill: "white" }}                        
                        />
                ))}
                <Tooltip itemSorter={(item) => { return (item.value) * -1 }}/>
            </ComposedChart>
            </div>
        </React.Fragment>                
    )
}