import { observable, action } from 'mobx';

const companiesStore = observable({
    fetching: false, // В данный момент идет запрос данных. Нужно для предотвращения запросов когда данные уше запрашиваются
    updateByFetchEnd: false, // Обновление компонента вызвано окончанием загрузки данных. Для определения в shouldComponentUpdate что обновление компонента вызвано обновлением данных в сторе
    companies: [],
    currentCompany: null,
    setProp: function(prop_name, a){
        this[prop_name] = a
    },
    setState: function(obj) {
        Object.assign(this, obj)
    }
},{
    setProp: action,
    setState: action
})

export default companiesStore