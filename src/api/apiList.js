/* eslint-disable quotes */
import api from '@/api/api';


export default {
  projectList(parameter) {
    return api.get(`photo`, parameter);
  },
};
