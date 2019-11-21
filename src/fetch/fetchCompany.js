import store from 'stores';
import fetchData from './fetchData';

const { companiesStore, loader, userStore } = store



// ПОЛУЧАЕМ ДАННЫЕ О КОМПАНИИ
const fetchCompany = async (id) => {
    try {   
      if(!loader.show) loader.setShow(true)
      companiesStore.setState({ fetching: true })

      // ПРИ ПЕРВОМ ЗАХОДЕ
      if(!companiesStore.companies.length) {
        // get user includes companies
        const userResult = await fetchData('/user', 'user')
        userStore.setState({
          login: userResult.username,
          balans: userResult.balans
        })
        companiesStore.setState({ companies: userResult.company }) 
      }
      
      // ЕСЛИ КОМПАНИИ НЕ СУЩЕСТВУЕТ
      if(!companiesStore.companies[id]) {
        // stop loading and exit
        companiesStore.setState({
          fetching: false,
          currentCompany: null
        })
        if(loader.show) loader.setShow(false)
        return
      }  

      // КОМПАНИЯ ЕСТЬ В МАССИВЕ
      // fetch company
      let companyResult = await fetchData(`/company/${companiesStore.companies[id].id}`, 'company')
      companiesStore.setState({
        updateByFetchEnd: true,
        currentCompany: companyResult,
        fetching: false
      })      
      if(loader.show) loader.setShow(false)

    } catch(err) {
      throw err
    }  
}


export default fetchCompany