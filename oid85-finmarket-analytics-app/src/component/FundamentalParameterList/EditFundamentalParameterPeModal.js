import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditFundamentalParameter,
    fetchCurrentFundamentalParameter,
    hideEditFundamentalParameterPeModal
} from '../../redux/actions/fundamentalParameterActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditFundamentalParameterPeModal = () => {
    
    const dispatch = useDispatch()
    const currentFundamentalParameter = useSelector(state => state.fundamentalParameter.currentFundamentalParameter)
    const editFundamentalParameterPeModalIsOpened = useSelector(state => state.fundamentalParameter.editFundamentalParameterPeModalIsOpened)

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
                    isOpen={editFundamentalParameterPeModalIsOpened}
                    style={customStyles}>
                    <h6>P/E</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pe2019} 
                            placeholder='2019 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pe2019: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pe2020} 
                            placeholder='2020 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pe2020: event.target.value})) 
                                }} />     
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pe2021} 
                            placeholder='2021 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pe2021: event.target.value})) 
                                }} />   
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pe2022} 
                            placeholder='2022 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pe2022: event.target.value})) 
                                }} />    
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pe2023} 
                            placeholder='2023 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pe2023: event.target.value})) 
                                }} />  
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pe2024} 
                            placeholder='2024 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pe2024: event.target.value})) 
                                }} />        
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pe2025} 
                            placeholder='2025 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pe2025: event.target.value})) 
                                }} />                                                                                                                                                                          
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditFundamentalParameter())
                                    dispatch(hideEditFundamentalParameterPeModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditFundamentalParameterPeModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}