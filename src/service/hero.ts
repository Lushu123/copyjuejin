import { request } from 'umi';
export const getHeroList = async () => {
  return request('/api/getHeroList', {
    method: 'get',
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
};
