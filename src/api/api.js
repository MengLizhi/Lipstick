/* eslint-disable no-console */
import axios from 'axios';

export default {
  path() {
    const path = 'https://strapi.stark.wiki';
    return path;
  },
  get(pageName, parm) {
    return axios({
      method: 'get',
      url: `${this.path()}/${pageName}`,
      params: parm,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  post(pageName, parm) {
    return axios({
      method: 'post',
      url: `${this.path()}/${pageName}`,
      data: parm,
    })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
