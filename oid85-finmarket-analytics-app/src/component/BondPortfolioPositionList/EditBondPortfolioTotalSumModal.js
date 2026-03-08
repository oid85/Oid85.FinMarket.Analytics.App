import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditBondPortfolioTotalSum,    
    hideEditBondPortfolioTotalSumModal,
    fetchBondPortfolioTotalSum
} from '../../redux/actions/bondPortfolioActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditBondPortfolioTotalSumModal = () => {
    
    const dispatch = useDispatch()
    const bondPortfolioTotalSum = useSelector(state => state.bondPortfolio.bondPortfolioTotalSum)
    const editBondPortfolioTotalSumModalIsOpened = useSelector(state => state.bondPortfolio.editBondPortfolioTotalSumModalIsOpened)

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
                    isOpen={editBondPortfolioTotalSumModalIsOpened}
                    style={customStyles}>
                    <h6>Сумма портфеля</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={bondPortfolioTotalSum} 
                            placeholder='Сумма портфеля' 
                            onChange={ (event) => { 
                                dispatch(fetchBondPortfolioTotalSum(event.target.value)) 
                                }} />                              
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditBondPortfolioTotalSum())
                                    dispatch(hideEditBondPortfolioTotalSumModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditBondPortfolioTotalSumModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}