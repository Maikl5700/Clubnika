import prm from "configs/api.settings";
import axios from 'axios';
import stringify from 'jquery-param';

const presetParams = {
    'user': {
        include: [{
          model: 'company'
        }]
    },
    'company': {
        include: [
          {
            model: 'companyEntity'
          },
          {
            model: 'companyCards'
          },
          {
            model: 'companyProgramms'
          },
          {
            model: 'user'
          },
        ]
    }
}

export default function (address = '', obj = false) {

    const params = {} // default params
    const { server_api } = prm()


    if(address) address += '?'

    if(typeof obj === 'object' && Object.keys(obj).length) {
        Object.assign(params, obj)
    }

    if(typeof obj === 'string') {
        Object.assign(params, presetParams[obj])
    }


    return new Promise(async (resolve, reject) => {
    
        try {
            const { data: { result } } = await axios.get(`${server_api}${address}${stringify(params)}`,
            {
              headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.CNJ_token).access_token //the token is a variable which holds the token
              }
            })
            
            resolve(result)
        } catch (err) {
            reject(err)            
        }
    })
}