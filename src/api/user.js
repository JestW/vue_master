import axios from './index'
export const getUserInfo = () => {
    return axios.request({
        url: '/user/list',
        method: 'get',
    })
};
