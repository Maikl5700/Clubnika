import { observable, action } from 'mobx';

const userStore = observable({
    login: null,
    balance: null,
    auth: false,
    captcha: false,
    setAuth: function (a) {
        this.auth = a
    },
    setProps: function(prop_name, a){
        this[prop_name] = a
    },
    setState: function(obj) {
        Object.assign(this, obj)
    }
},{
    setAuth: action,
    setProps: action,
    setState: action
})

export default userStore
