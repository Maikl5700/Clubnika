import { observable } from 'mobx';

const dialog = observable({
    open: 0,
    childs: "",
    setOpen: function (a) {
        this.open = a
    },
    setChilds: function (c) {
        this.childs = c
    }
})

export default dialog