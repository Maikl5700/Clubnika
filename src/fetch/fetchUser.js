import store from 'stores';
import fetchData from './fetchData';

const { companiesStore, loader, userStore } = store


// ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ И ЕГО КОМПАНИЙ
const fetchUser = async () => {
    if(!loader.show) loader.setShow(true)
    companiesStore.setState({ fetching: true })

    const result = await fetchData('/user', 'user')
    userStore.setState({
      login: result.username,
      balans: result.balans
    })
    companiesStore.setState({
      fetching: false,
      updateByFetchEnd: true,
      companies: result.company
    })

    if(loader.show) loader.setShow(false)
}


export default fetchUser

