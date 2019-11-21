import { observable, action } from 'mobx';

const loader = observable({
    show: true,
    full: true,
    setShow: function(a, b = false){
        this.show = a
        this.full = b
    }
},{
    setShow: action
})

export default loader