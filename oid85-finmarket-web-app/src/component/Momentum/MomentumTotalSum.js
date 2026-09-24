import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'
import { fetchMomentumPortfolioTotalSum, showEditMomentumPortfolioTotalSumModal } from '../../redux/actions/momentumActions';
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const MomentumTotalSum = ({title, text, value, eunit}) => {

    const dispatch = useDispatch()
    
    return (
        <React.Fragment>          
            <div 
                title={title} 
                className='momentum-total-sum border-style' 
                style={{backgroundColor: CONSTANTS.COLOR_LIGHTGREEN}}
                onDoubleClick={() => {                    
                    dispatch(fetchMomentumPortfolioTotalSum(value))
                    dispatch(showEditMomentumPortfolioTotalSumModal())
                }} >
                <div className='momentum-container momentum-total-summ-description'>{text}</div> 
                <div className='momentum-container momentum-total-summ-value'>{`${formatNumber(value)} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}