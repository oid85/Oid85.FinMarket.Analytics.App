import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditFundamentalParameter,
    fetchCurrentFundamentalParameter,
    hideEditFundamentalParameterDividendModal
} from '../../redux/actions/fundamentalParameterActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditFundamentalParameterDividendModal = () => {
    
    const dispatch = useDispatch()
    const currentFundamentalParameter = useSelector(state => state.fundamentalParameter.currentFundamentalParameter)
    const editFundamentalParameterDividendModalIsOpened = useSelector(state => state.fundamentalParameter.editFundamentalParameterDividendModalIsOpened)

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
                    isOpen={editFundamentalParameterDividendModalIsOpened}
                    style={customStyles}>
                    <h6>Дивидендная доходность</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2015} 
                            placeholder='2015 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2015: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2016} 
                            placeholder='2016 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2016: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2017} 
                            placeholder='2017 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2017: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2018} 
                            placeholder='2018 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2018: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2019} 
                            placeholder='2019 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2019: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2020} 
                            placeholder='2020 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2020: event.target.value})) 
                                }} />     
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2021} 
                            placeholder='2021 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2021: event.target.value})) 
                                }} />   
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2022} 
                            placeholder='2022 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2022: event.target.value})) 
                                }} />    
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2023} 
                            placeholder='2023 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2023: event.target.value})) 
                                }} />  
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2024} 
                            placeholder='2024 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2024: event.target.value})) 
                                }} />        
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2025} 
                            placeholder='2025 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2025: event.target.value})) 
                                }} />  
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.dividend2026} 
                            placeholder='2026 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, dividend2026: event.target.value})) 
                                }} />
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditFundamentalParameter())
                                    dispatch(hideEditFundamentalParameterDividendModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditFundamentalParameterDividendModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}