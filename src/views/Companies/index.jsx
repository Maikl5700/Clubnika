import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { 
  Card,
  ListItem,
  List,
  IconButton,
  Breadcrumbs
} from '@material-ui/core';
import {
  Refresh as RefreshIcon,
  Add as AddIcon,
  NavigateNext,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@material-ui/icons';
import Page from 'components/Page';
import { Link } from 'react-router-dom';
import store from 'stores';
import { inject } from 'mobx-react';
import fetch from 'fetch/fetchUser';
import CompanyDialog from './components/CompanyDialog'

const styles = theme => ({
  root: {
    // width: theme.breakpoints.values.lg,
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(2)
  },
  statistics: {
    marginTop: theme.spacing(3)
  },
  notifications: {
    marginTop: theme.spacing(6)
  },
  projects: {
    marginTop: theme.spacing(6)
  },
  todos: {
    marginTop: theme.spacing(6)
  },
  h1: {
    fontWeight: 600,
    color: '#2e2e2e',
    cursor: 'pointer',
    "&:hover, &:focus": {
      color: 'rgba(0,0,0,0.8)',
      cursor: 'pointer'
    },
    "&:active": {
      color: 'rgba(0,0,0,0.9)'
    }
  },
  list_item: {
    backgroundColor: '#ffffff',
    "&:hover, &:focus": {
      backgroundColor: 'rgba(0,0,0,0.1)',
      cursor: 'pointer'
    },
    "&:active": {
      backgroundColor: 'rgba(0,0,0,0.2)'
    }
  },
  grid_item: {
    // backgroundColor: '#f00',
    // height: 100
  },
  grid_cont: {
    margin: 0
  },
  brsc: {
    marginLeft: '-4px'
  },
  icon_button: {
    '&:hover>.MuiIconButton-label': {
      transform: 'rotate(360deg)',
      transition: '0.5s'
    }
  }
});
const { companiesStore } = store



class Overview extends Component {

  state = {
    modalOpen: false
  }

  componentDidMount() {
    fetch()
  } 
  
  shouldComponentUpdate(nextProps, nextState){
    //console.log('upd')
    if(nextState.modalOpen !== this.state.modalOpen) {
      return true
    }

    if(companiesStore.updateByFetchEnd) {
      console.log('ON FETCH END')
      companiesStore.updateByFetchEnd = false
      return true
    }

    if(!companiesStore.fetching) {
      fetch()
    }

    return false
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }  

  render(){
    const { classes, history, companies } = this.props
    const { modalOpen } = this.state
    //console.log(companies)
    //console.log('upd')

    return (
      <Page title="Overview">
        <div className={classes.root}>
            <Breadcrumbs className={classes.brsc} separator={<NavigateNext fontSize="small"/>} aria-label="breadcrumb">
              <Link to="/">
                Компании
              </Link>
            </Breadcrumbs>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <h1
                className={classes.h1}
                onClick={() => { history.push('/') }}
              >Компании</h1>
              <div>
                <IconButton
                  className={classes.icon_button}
                  title="Добавить компанию"
                  onClick={() => { this.setState({ modalOpen: true }) }}
                >
                  <AddIcon/>
                </IconButton>
                <IconButton
                  className={classes.icon_button}
                  title="Обновить список"
                  onClick={()=>{fetch()}}
                >
                  <RefreshIcon/>
                </IconButton>
              </div>
            </div>
            <Card>
              <List>
                {companies.map((el, i) => (
                  <Link
                    key={i}
                    to={{
                      pathname: `/${i}`,
                      state: { company_id: i }
                    }}
                  >
                    <ListItem 
                      style={{
                        justifyContent: 'space-between'
                      }}
                      key={i} 
                      alignItems="center" 
                      className={classes.list_item}
                    >
                      <div style={{ fontSize: 18 }}>{el.name}</div>
                      <div>
                        <IconButton style={{ marginRight: 10 }} size="small">
                          <EditIcon style={{ fontSize: 27 }}/>
                        </IconButton>
                        <IconButton size="small">
                          <DeleteIcon style={{ fontSize: 27 }}/>
                        </IconButton>
                      </div>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Card>                  
        </div>
        {/* MODAL */}
        <CompanyDialog
          open={modalOpen}
          ctx="createCompany"
          callParentCloseModal={this.handleClose}
        />
      </Page>
    );
  }
};

export default inject(stores => ({ companies: stores.companiesStore.companies }))(withStyles(styles)(Overview));
