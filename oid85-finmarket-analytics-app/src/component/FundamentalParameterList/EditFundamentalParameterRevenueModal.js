import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    sagaEditFundamentalParameter,
    fetchCurrentFundamentalParameter,
    hideEditFundamentalParameterRevenueModal
} from '../../redux/actions/fundamentalParameterActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditFundamentalParameterRevenueModal = () => {
    
    const dispatch = useDispatch()
    const currentFundamentalParameter = useSelector(state => state.fundamentalParameter.currentFundamentalParameter)
    const editFundamentalParameterRevenueModalIsOpened = useSelector(state => state.fundamentalParameter.editFundamentalParameterRevenueModalIsOpened)

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
                    isOpen={editFundamentalParameterRevenueModalIsOpened}
                    style={customStyles}>
                    <h6>Выручка</h6>
                    <form>
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.revenue2019} 
                            placeholder='2019 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, revenue2019: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.revenue2020} 
                            placeholder='2020 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, revenue2020: event.target.value})) 
                                }} />     
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.revenue2021} 
                            placeholder='2021 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, revenue2021: event.target.value})) 
                                }} />   
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.revenue2022} 
                            placeholder='2022 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, revenue2022: event.target.value})) 
                                }} />    
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.revenue2023} 
                            placeholder='2023 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, revenue2023: event.target.value})) 
                                }} />  
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.revenue2024} 
                            placeholder='2024 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, revenue2024: event.target.value})) 
                                }} />        
                        <input 
                            className='form-control edit-modal-input' 
                            type="number" 
                            defaultValue={currentFundamentalParameter.revenue2025} 
                            placeholder='2025 г.' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentFundamentalParameter({...currentFundamentalParameter, revenuee2025: event.target.value})) 
                                }} />                                                                                                                                                                          
                        <button 
                            className='btn btn-outline-primary edit-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditFundamentalParameter())
                                    dispatch(hideEditFundamentalParameterRevenueModal())
                                    }}>Сохранить</button>                                   
                        <button 
                            className='btn btn-outline-primary edit-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditFundamentalParameterRevenueModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}