import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditFundamentalParameter,
    fetchCurrentFundamentalParameter,
    hideEditFundamentalParameterModal,
    sagaDeleteFundamentalParameter
} from '../../redux/actions/fundamentalParameterActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditFundamentalParameterModal = () => {
    
    const dispatch = useDispatch()
    const currentFundamentalParameter = useSelector(state => state.fundamentalParameter.currentFundamentalParameter)
    const editFundamentalParameterModalIsOpened = useSelector(state => state.fundamentalParameter.editFundamentalParameterModalIsOpened)

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
                    isOpen={editFundamentalParameterModalIsOpened}
                    style={customStyles}>
                    <h6>{`Редактирование параметра ${currentFundamentalParameter.type}`}</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="string" 
                            defaultValue={currentFundamentalParameter.value} 
                            placeholder={`${currentFundamentalParameter.period}`} 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, value: event.target.value }))
                                }} /> 
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditFundamentalParameter())
                                    dispatch(hideEditFundamentalParameterModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditFundamentalParameterModal()) 
                                }}>Закрыть</button>  
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaDeleteFundamentalParameter())
                                    dispatch(hideEditFundamentalParameterModal())
                                    }}>Удалить</button>                                                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}