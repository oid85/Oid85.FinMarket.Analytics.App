import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditPortfolioPosition,
    fetchCurrentPortfolioPosition,
    hideEditPortfolioPositionModal
} from '../../redux/actions/portfolioActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditPortfolioPositionModal = () => {
    
    const dispatch = useDispatch()
    const currentPortfolioPosition = useSelector(state => state.portfolio.currentPortfolioPosition)
    const editPortfolioPositionModalIsOpened = useSelector(state => state.portfolio.editPortfolioPositionModalIsOpened)

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
                    <h6>Позиция в портфеле</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentPortfolioPosition.dividendFactorCoefficient} 
                            placeholder='Дивидендный фактор' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentPortfolioPosition({...currentPortfolioPosition, dividendFactorCoefficient: event.target.value})) 
                                }} />
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditPortfolioPosition())
                                    dispatch(hideEditPortfolioPositionModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditPortfolioPositionModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}