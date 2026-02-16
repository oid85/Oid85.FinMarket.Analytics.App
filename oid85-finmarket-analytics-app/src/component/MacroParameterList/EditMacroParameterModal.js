import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditMacroParameter,
    fetchCurrentMacroParameter,
    hideEditMacroParameterModal
} from '../../redux/actions/macroParameterActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditMacroParameterModal = () => {
    
    const dispatch = useDispatch()
    const currentMacroParameter = useSelector(state => state.macroParameter.currentMacroParameter)
    const editMacroParameterModalIsOpened = useSelector(state => state.macroParameter.editMacroParameterModalIsOpened)

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
                    isOpen={editMacroParameterModalIsOpened}
                    style={customStyles}>
                    <h6>Макропараметр</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentMacroParameter.m0} 
                            placeholder='M0' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMacroParameter({...currentMacroParameter, m0: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentMacroParameter.m1} 
                            placeholder='M1' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMacroParameter({...currentMacroParameter, m1: event.target.value})) 
                                }} />    
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentMacroParameter.m2} 
                            placeholder='M2' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMacroParameter({...currentMacroParameter, m2: event.target.value})) 
                                }} />   
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentMacroParameter.m2x} 
                            placeholder='M2X' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMacroParameter({...currentMacroParameter, m2X: event.target.value})) 
                                }} />  
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentMacroParameter.consumerPriceIndexChange} 
                            placeholder='ИПЦ (изм.)' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMacroParameter({...currentMacroParameter, consumerPriceIndexChange: event.target.value})) 
                                }} />  
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentMacroParameter.keyRate} 
                            placeholder='Ключевая ставка' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMacroParameter({...currentMacroParameter, keyRate: event.target.value})) 
                                }} />        
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditMacroParameter())
                                    dispatch(hideEditMacroParameterModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditMacroParameterModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}