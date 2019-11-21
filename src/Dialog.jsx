import React from 'react';
import { inject, observer } from 'mobx-react';
import Dialog from '@material-ui/core/Dialog';

const Dialog1 = props => {

    const { dialog } = props
    // console.log(dialog)
    const handleClose = () => {
        dialog.setOpen(0)
    }

    return (
        <Dialog
            open={!!dialog.open}
            onClose={handleClose}
            children={dialog.childs}
        />
    )
}

export default inject('dialog')(observer(Dialog1))