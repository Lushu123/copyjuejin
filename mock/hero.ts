import heroList from './herolist.json';
import mockjs from 'mockjs';
export default {
  '/api/getHeroList': heroList,
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
