import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditMomentumPortfolioTotalSum,
    fetchMomentumPortfolioTotalSum,
    hideEditMomentumPortfolioTotalSumModal,
    sagaMomentumMonitor
} from '../../redux/actions/momentumActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditMomentumPortfolioTotalSumModal = () => {
    
    const dispatch = useDispatch()
    const momentumPortfolioTotalSum = useSelector(state => state.momentum.momentumPortfolioTotalSum)
    const editMomentumPortfolioTotalSumModalIsOpened = useSelector(state => state.momentum.editMomentumPortfolioTotalSumModalIsOpened)

    const customStyles = {
        content: {
          top: '50%',
          left: '50%', 
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',                          
          transform: 'translate(-50%, -50%)'
        }
      };

    return (
        <React.Fragment>
            <div>                
                <Modal
                    isOpen={editMomentumPortfolioTotalSumModalIsOpened}
                    style={customStyles}>
                    <h6>Сумма портфеля</h6>
                    <form>
                        <label>Сумма портфеля</label>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={momentumPortfolioTotalSum} 
                            placeholder='Сумма портфеля' 
                            onChange={ (event) => { 
                                dispatch(fetchMomentumPortfolioTotalSum(event.target.value))
                                }} />                                                               
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditMomentumPortfolioTotalSum())
                                    dispatch(sagaMomentumMonitor())
                                    dispatch(hideEditMomentumPortfolioTotalSumModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditMomentumPortfolioTotalSumModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}