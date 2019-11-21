import React, { Component } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions
} from '@material-ui/core';
import notifier from 'stores/notifier';
import Dots from 'components/ThreeDotsLoader';
import axios from 'axios';
import prm from "configs/api.settings";


const modalContext = {
    'createCompany': {
        axios: {

        },
        child: (ctx) => (
            <>
            <DialogTitle id="form-dialog-title">Новая компания</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Чтобы добавить новую компанию, введите название и нажмите создать.
              </DialogContentText>
              <TextField
                inputRef={ref => { ctx.inputRef = ref; }}
                autoFocus
                margin="dense"
                id="name"
                label="Название"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions style={{padding:'8px 24px'}}>
              <Button disabled={ctx.state.loading} size="medium" onClick={ctx.handleSubmit} color="primary">
                {ctx.state.loading ? <Dots style={{width:'100%'}}/> : "Создать"}
              </Button>
              <Button disabled={ctx.state.loading} onClick={ctx.props.callParentCloseModal} color="primary">
                Отмена
              </Button>
            </DialogActions>
            </>
        )
    } 
}

export class CompanyDialog extends Component {
    
    state = {
        loading: false
    }

    shouldComponentUpdate(){
        console.log('dialog upd')
        return true
    }

    handleSubmit = () => {
        //console.log(this.inputRef.value)
        const { server_api } = prm()
        axios.post(`${server_api}/company`,{
            name: this.inputRef.value,
            acl: "all",
            
        },{
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.CNJ_token).access_token //the token is a variable which holds the token
            }
        })
        .then(res => console.log(res))
        .catch(err => {throw err})
    }

    render() {
        const { loading } = this.state

        return (
          <Dialog open={this.props.open} onClose={!loading ? this.props.callParentCloseModal : null} aria-labelledby="form-dialog-title">
              {modalContext[this.props.ctx].child(this)}
          </Dialog>
        );
    }
}

export default CompanyDialog;
