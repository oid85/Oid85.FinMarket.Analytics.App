import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const MomentumTerminalSyncStop = ({button}) => {
    return (
        <React.Fragment>    
            {
                button.doShow
                ?
                <div className='momentum-terminal-row-sync-stop border-style' style={{backgroundColor: button.colorFill}}>
                    Синхр.
                </div>
                :
                <div className='momentum-terminal-row-sync-stop border-style'></div>
            }      
        </React.Fragment>
    )
}