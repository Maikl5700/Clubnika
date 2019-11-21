import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Page from 'components/Page';
import store from 'stores';
import { Link } from 'react-router-dom';
import { NavigateNext } from '@material-ui/icons';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import { inject } from 'mobx-react';
import fetchCompany from 'fetch/fetchCompany.js';



const styles = theme => ({
  root: {
    // width: theme.breakpoints.values.lg,
    width: '100%',
    maxWidth: '100%',
    // margin: '0 auto',
    // boxSizing: 'border-box',
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
    marginBottom: 15,
    // cursor: 'pointer',
    // "&:hover, &:focus": {
    //   color: 'rgba(0,0,0,0.5)',
    //   cursor: 'pointer'
    // },
    // "&:active": {
    //   color: 'rgba(0,0,0,0.8)'
    // }
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
    paddingLeft: '4px'
  }
});
const { companiesStore } = store



class Overview extends Component {
  
  componentDidMount() {
    fetchCompany(this.props.match.params.id)
  }
  

  shouldComponentUpdate(nextProps, nextState){
    // console.log('UPD')
    if(companiesStore.updateByFetchEnd) {
      console.log('ON FETCH END')
      companiesStore.updateByFetchEnd = false
      return true
    }

    if(!companiesStore.fetching) {
      fetchCompany(this.props.match.params.id)
    }

    return false
  }

  render(){
    const { classes, match: { params }, company } = this.props
    //console.log(this.props)
    //const company = companies[params.id]
    console.log(company)
    if(company) {
      return (
        // <h1>123</h1>
        <Page title="Overview">
          <div className={classes.root}>
                <Grid 
                  container
                  spacing={2}
                >
                  <Breadcrumbs  className={classes.brsc} separator={<NavigateNext fontSize="small"/>} aria-label="breadcrumb">
                    <Link to="/">
                      Компании
                    </Link>
                    <Link to={`/${params.id}`}>
                      {company.name}
                    </Link>
                  </Breadcrumbs>
                  <div style={{width: '100%'}}></div>
                  <Grid item lg={6} md={12} xs={12}
                    className={classes.grid_item}
                  >
                    <h1 className={classes.h1}>Юр. лица</h1>
                    <Card>
                      <List>
                        {company.companyEntity.map((el, i) => (<ListItem key={i} className={classes.list_item}>{el.name}</ListItem>))}
                      </List>
                    </Card>                  
                  </Grid>
                  <Grid item lg={6} md={12} xs={12}
                    className={classes.grid_item}
                  >
                    <h1 className={classes.h1}>Карты</h1>
                    <Card>
                      <List>
                        {company.companyCards.map((el, i) => (<ListItem key={i} className={classes.list_item}>{el.cardId}</ListItem>))}
                      </List>
                    </Card>
                  </Grid>
                  <Grid item lg={6} md={12} xs={12}
                    className={classes.grid_item}
                  >
                    <h1 className={classes.h1}>Программы</h1>
                    <Card>
                      <List>
                        {company.companyProgramms.map((el, i) => (<ListItem key={i} className={classes.list_item}>{el.name}</ListItem>))}
                      </List>
                    </Card>
                  </Grid>
                  <Grid item lg={6} md={12} xs={12}
                    className={classes.grid_item}
                  >
                    <h1 className={classes.h1}>Пользователи</h1>
                    <Card>
                      <List>
                        {company.user.map((el, i) => (<ListItem key={i} className={classes.list_item}>{el.username}</ListItem>))}
                      </List>
                    </Card>
                  </Grid>
                </Grid>
          </div>
        </Page>
      );
    } else return (<h1 style={{ margin: '10px 20px', fontWeight: 400 }}>Компания не найдена</h1>)
  }
};


// export default inject(stores => { console.log(stores); return { company: stores.companiesStore.currentCompany } })(withStyles(styles)(Overview))
export default inject(stores => ({ 
  // company: stores.companiesStore.currentCompany
  upd: stores.companiesStore,
  company: stores.companiesStore.currentCompany
}))(withStyles(styles)(Overview))
