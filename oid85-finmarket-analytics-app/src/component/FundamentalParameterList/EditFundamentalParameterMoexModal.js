import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditFundamentalParameter,
    fetchCurrentFundamentalParameter,
    hideEditFundamentalParameterMoexModal
} from '../../redux/actions/fundamentalParameterActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditFundamentalParameterMoexModal = () => {
    
    const dispatch = useDispatch()
    const currentFundamentalParameter = useSelector(state => state.fundamentalParameter.currentFundamentalParameter)
    const editFundamentalParameterMoexModalIsOpened = useSelector(state => state.fundamentalParameter.editFundamentalParameterMoexModalIsOpened)

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
                    isOpen={editFundamentalParameterMoexModalIsOpened}
                    style={customStyles}>
                    <h6>Доля в индексе IMOEX</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.moex} 
                            placeholder='IMOEX' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, moex: event.target.value})) 
                                }} />
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditFundamentalParameter())
                                    dispatch(hideEditFundamentalParameterMoexModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditFundamentalParameterMoexModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}