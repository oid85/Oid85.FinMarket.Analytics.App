import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditEtfPortfolioPosition,
    fetchCurrentEtfPortfolioPosition,
    hideEditEtfPortfolioPositionModal
} from '../../redux/actions/etfPortfolioActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditEtfPortfolioPositionModal = () => {
    
    const dispatch = useDispatch()
    const currentPortfolioPosition = useSelector(state => state.etfPortfolio.currentEtfPortfolioPosition)
    const editPortfolioPositionModalIsOpened = useSelector(state => state.etfPortfolio.editEtfPortfolioPositionModalIsOpened)

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
                    isOpen={editPortfolioPositionModalIsOpened}
                    style={customStyles}>
                    <h6>Настройки позиции</h6>
                    <form>
                        <label>Ручной коэф.</label>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentPortfolioPosition.manualCoefficient} 
                            placeholder='Ручной коэф.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentEtfPortfolioPosition({...currentPortfolioPosition, manualCoefficient: event.target.value})) 
                                }} />  
                        <label>Позиция в портфеле</label>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentPortfolioPosition.lifeSize} 
                            placeholder='Позиция в портфеле' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentEtfPortfolioPosition({...currentPortfolioPosition, lifeSize: event.target.value})) 
                                }} />                                                               
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditEtfPortfolioPosition())
                                    dispatch(hideEditEtfPortfolioPositionModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditEtfPortfolioPositionModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}