import React from 'react'
import './styles.css'
import {CONSTANTS} from '../../constants'

export const TrendDynamicData = ({data}) => {

    return (
        <React.Fragment>          
            <div className='vertical-container'>
                <div>
                    {
                        data.map((item, index) => (
                            <div className='horizontal-container border'>
                                <div className='ticker-cell border' key = {index}>{item.ticker}</div>
                                    <div className='vertical-container border'>
                                        <div className='horizontal-container'>
                                        {
                                            item.trend.map((trendValue, index) => (                                                
                                                <div className='trend-cell border' style={{backgroundColor: trendValue == 1 ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_RED }}>
                                                </div>
                                            ))
                                        }     
                                        </div>
                                        <div className='horizontal-container'>
                                        {
                                            item.delta.map((deltaValue, index) => (
                                                <div className='delta-cell border' style={{color: deltaValue > 0 ? CONSTANTS.COLOR_DARKGREEN : CONSTANTS.COLOR_DARKRED }}>
                                                    {deltaValue} %
                                                </div>
                                            ))
                                        }     
                                        </div>      
                                    </div>                                    
                                </div>
                        ))
                    }
                </div>           
            </div>
        </React.Fragment>                
    )
}