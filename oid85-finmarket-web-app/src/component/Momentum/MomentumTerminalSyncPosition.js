import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const MomentumTerminalSyncPosition = ({button}) => {
    return (
        <React.Fragment>    
            {
                button.doShow
                ?
                <div className='momentum-terminal-row-sync-position border-style' style={{backgroundColor: button.colorFill}}>
                    Синхр.
                </div>
                :
                <div className='momentum-terminal-row-sync-position border-style'></div>
            }      
        </React.Fragment>
    )
}