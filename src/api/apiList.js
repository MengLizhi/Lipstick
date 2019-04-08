/* eslint-disable quotes */
import api from '@/api/api';


export default {
  login(parameter) {
    return api.get(`login/`, parameter);
  },
  userinfo(parameter) {
    return api.get(`userinfo/`, parameter);
  },
};
