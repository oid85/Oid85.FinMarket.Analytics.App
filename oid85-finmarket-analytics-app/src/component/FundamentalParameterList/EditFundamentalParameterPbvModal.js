import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditFundamentalParameter,
    fetchCurrentFundamentalParameter,
    hideEditFundamentalParameterPbvModal
} from '../../redux/actions/fundamentalParameterActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditFundamentalParameterPbvModal = () => {
    
    const dispatch = useDispatch()
    const currentFundamentalParameter = useSelector(state => state.fundamentalParameter.currentFundamentalParameter)
    const editFundamentalParameterPbvModalIsOpened = useSelector(state => state.fundamentalParameter.editFundamentalParameterPbvModalIsOpened)

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
                    isOpen={editFundamentalParameterPbvModalIsOpened}
                    style={customStyles}>
                    <h6>P/BV</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pbv2019} 
                            placeholder='2019 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pbv2019: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pbv2020} 
                            placeholder='2020 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pbv2020: event.target.value})) 
                                }} />     
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pbv2021} 
                            placeholder='2021 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pbv2021: event.target.value})) 
                                }} />   
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pbv2022} 
                            placeholder='2022 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pbv2022: event.target.value})) 
                                }} />    
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pbv2023} 
                            placeholder='2023 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pbv2023: event.target.value})) 
                                }} />  
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pbv2024} 
                            placeholder='2024 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pbv2024: event.target.value})) 
                                }} />        
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pbv2025} 
                            placeholder='2025 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pbv2025: event.target.value})) 
                                }} />  
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.pbv2026} 
                            placeholder='2026 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, pbv2026: event.target.value})) 
                                }} />
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditFundamentalParameter())
                                    dispatch(hideEditFundamentalParameterPbvModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditFundamentalParameterPbvModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}