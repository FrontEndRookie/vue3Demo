import myAxios from "../request";

export function getListAPI(paramsList) {
    return myAxios({
      url: '/api/list',
      method: 'get',
      params: paramsList
    }, {
      repeat_request_cancel: false
    })
  }
  
