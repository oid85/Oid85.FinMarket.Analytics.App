import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditBondPortfolioPosition,
    fetchCurrentBondPortfolioPosition,
    hideEditBondPortfolioPositionModal
} from '../../redux/actions/bondPortfolioActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditBondPortfolioPositionModal = () => {
    
    const dispatch = useDispatch()
    const currentBondPortfolioPosition = useSelector(state => state.bondPortfolio.currentBondPortfolioPosition)
    const editBondPortfolioPositionModalIsOpened = useSelector(state => state.bondPortfolio.editBondPortfolioPositionModalIsOpened)

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
                    isOpen={editBondPortfolioPositionModalIsOpened}
                    style={customStyles}>
                    <h6>Настройки позиции</h6>
                    <form>
                        <label>Ручной коэф.</label>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentBondPortfolioPosition.manualCoefficient} 
                            placeholder='Ручной коэф.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentBondPortfolioPosition({...currentBondPortfolioPosition, manualCoefficient: event.target.value})) 
                                }} />     
                        <label>Позиция в портфеле</label>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentBondPortfolioPosition.lifeSize} 
                            placeholder='Позиция в портфеле' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentBondPortfolioPosition({...currentBondPortfolioPosition, lifeSize: event.target.value})) 
                                }} />                                                                                                                         
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditBondPortfolioPosition())
                                    dispatch(hideEditBondPortfolioPositionModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditBondPortfolioPositionModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}