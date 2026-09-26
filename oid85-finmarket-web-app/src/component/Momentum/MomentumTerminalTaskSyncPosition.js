import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const MomentumTerminalTaskSyncPosition = ({task}) => {
    return (
        <React.Fragment>    
            {
                task.doShow
                ?
                <div className='momentum-terminal-row-task-sync-position border-style' style={{backgroundColor: task.colorFill}}>
                    Вып.
                </div>
                :
                <div className='momentum-terminal-row-task-sync-position border-style'></div>
            }      
        </React.Fragment>
    )
}