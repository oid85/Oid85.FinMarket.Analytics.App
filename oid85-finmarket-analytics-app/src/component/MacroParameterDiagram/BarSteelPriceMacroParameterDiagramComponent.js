import React from 'react'
import { Bar, Area, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

let series = [
    {
        "name": "Цена на сталь, руб",
        "color": "#191970",
        "colorFill": "#357EC7",
        "data": [
            { "date": "2025.01.15", "value": 69185 },
            { "date": "2025.01.31", "value": 67989 },
            { "date": "2025.02.11", "value": 67801 },
            { "date": "2025.02.26", "value": 67818 },
            { "date": "2025.03.14", "value": 68065 },
            { "date": "2025.03.29", "value": 68213 },
            { "date": "2025.04.18", "value": 68886 },
            { "date": "2025.05.01", "value": 69030 },
            { "date": "2025.05.14", "value": 69246 },
            { "date": "2025.06.03", "value": 69329 },
            { "date": "2025.06.18", "value": 68955 },
            { "date": "2025.07.01", "value": 69006 },
            { "date": "2025.07.16", "value": 68471 },
            { "date": "2025.07.31", "value": 67232 },
            { "date": "2025.09.05", "value": 65520 },
            { "date": "2025.09.24", "value": 63423 },
            { "date": "2025.10.16", "value": 63474 },
            { "date": "2025.11.07", "value": 62714 },
            { "date": "2025.12.01", "value": 61341 },
            { "date": "2025.12.23", "value": 60289 },

            { "date": "2026.01.23", "value": 60317 },
            { "date": "2026.02.13", "value": 60115 },
            { "date": "2026.03.05", "value": 59957 },
            { "date": "2026.04.02", "value": 60602 },
            { "date": "2026.04.30", "value": 61486 },
            { "date": "2026.05.25", "value": 63800 },
            { "date": "2026.06.30", "value": 69676 },
            { "date": "2026.07.17", "value": 73858 }
        ]
    }
]

export const BarSteelPriceMacroParameterDiagramComponent = () => {
    return (
        <React.Fragment>          
            <div className='macro-diagram'>
            <ComposedChart                                    
                data={series}
                height={300}                                                
                width={1500}
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