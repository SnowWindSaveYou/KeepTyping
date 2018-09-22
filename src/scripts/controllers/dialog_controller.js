import React from 'react'
import ReactDOM from 'react-dom'

function DialogController(){
    DialogController

    const holder = document.createElement('div');
    document.body.appendChild(holder);

    const close = () => {
        document.body.removeChild(holder)
    }
    ReactDOM.render()


}

export default DialogController;