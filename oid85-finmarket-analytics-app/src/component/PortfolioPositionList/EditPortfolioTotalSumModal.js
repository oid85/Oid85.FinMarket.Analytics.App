import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditPortfolioTotalSum,
    fetchCurrentPortfolioTotalSum,
    hideEditPortfolioTotalSumModal,
    fetchPortfolioTotalSum
} from '../../redux/actions/portfolioActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditPortfolioTotalSumModal = () => {
    
    const dispatch = useDispatch()
    const portfolioTotalSum = useSelector(state => state.portfolio.portfolioTotalSum)
    const editPortfolioTotalSumModalIsOpened = useSelector(state => state.portfolio.editPortfolioTotalSumModalIsOpened)

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
                    isOpen={editPortfolioTotalSumModalIsOpened}
                    style={customStyles}>
                    <h6>Сумма портфеля</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={portfolioTotalSum} 
                            placeholder='Сумма портфеля' 
                            onChange={ (event) => { 
                                dispatch(fetchPortfolioTotalSum(event.target.value)) 
                                }} />                              
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditPortfolioTotalSum())
                                    dispatch(hideEditPortfolioTotalSumModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditPortfolioTotalSumModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}