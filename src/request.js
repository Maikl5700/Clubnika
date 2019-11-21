import axios from 'axios'
import qs from 'qs'
import global_settings from './configs/api.settings'
// import reqinterval from './getIntervalReq'

function isEmpty(v) {
  for (let i in v) {
    if (v.hasOwnProperty(i)) {
      return false;
    }
  }
  return true;
}

function option(options) {
    const {
      method = 'get',
      data = {},
      url
    } = options;
    const req = {};
    req.baseURL = global_settings().server_api;
    req.timeout = 10000;
    req.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    req.method = method;
    req.data = method.toLowerCase() === 'get' ? qs.stringify(data) : data;
    req.url = url;
    if (localStorage.getItem('CNJ_token') && url !== '/oauth/token') {
      const data = JSON.parse(localStorage.getItem('CNJ_token'));
      req.headers['Authorization'] = data.token_type + ' ' + data.access_token;
    }
    return req;
  }

  function _resp(response) {
    const {statusText, status} = response;
    let data = {};
      data.data = !!response.data.result ? response.data.result : null;
      data.success = !!response.data.result;
      data.message = statusText;
      data.status = status;
      return data;
  }

  function request(options, resp = _resp) {
    if (isEmpty(options))
      return Promise.reject('Error: no parameters!');
    return axios(option(options))
      .then((response) => resp(response))
      .catch((error) => {
      const {response} = error;
      let message;
      let status;
      let dat;
      if (response) {
        status = response.status;
        const {data, statusText} = response;
        message = data.message || statusText;
        dat = data;

        if (status === 401 && localStorage.getItem('CNJ_token')) {
          //grant_type=refresh_token client_id=android client_secret=SomeRandomCharsAndNumbers refresh_token=[REFRESH_TOKEN]
          const token = JSON.parse(localStorage.getItem('CNJ_token'));
          const opt = {
            grant_type: "refresh_token",
            client_id: global_settings().client_id,
            client_secret: global_settings().client_secret,
            refresh_token: token.refresh_token
          };
          return request({
            method: 'post',
            data: opt,
            url: '/oauth/token'
          }, (response) => {
            const {statusText, status} = response;
            let data = {};
            data.data = !!response.data ? response.data : null;
            data.success = !!response.data;
            data.message = statusText;
            data.status = status;
            return data;
          }).then(data => {
            if (data.status === 401) {
              localStorage.removeItem('CNJ_token');
              data.success = false;
              return data
            } else if (data.status === 403) {
              localStorage.removeItem('CNJ_token');
              data.success = false;
              return data
            }
            data.success && localStorage.setItem('CNJ_token', JSON.stringify(data.data));
            return data;
          }).then(data=>{
            if (data.success) return request(options);
            throw new Error('Not Login');
          });
        }

      } else {
        status = 600;
        message = 'Error! No connect!'
      }
      return Promise.resolve({
        success: false,
        status,
        message,
        data: dat
      })
    })
  }

  function login(opt) {
    // console.log(opt)
    if (isEmpty(opt) || (!opt.username || !opt.password))
      return Promise.reject('Error: no parameters!');

    Object.assign(opt, {
      grant_type: global_settings().grand_type,
      client_id: global_settings().client_id,
      client_secret: global_settings().client_secret
    });
    return request({
      method: 'post',
      data: opt,
      url: '/oauth/token'
    }, (response) => {
      const {statusText, status} = response;
      let data = {};
      data.data = !!response.data ? response.data : null;
      data.success = !!response.data;
      data.message = statusText;
      data.status = status;
      return data;
    }).then(data => {
      data.success && localStorage.setItem('CNJ_token', JSON.stringify(data.data));
      return data;
    });
  }

export default {
  login,
  request
  // reqinterval
}
