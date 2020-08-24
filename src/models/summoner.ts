import { Effect, Reducer } from 'umi';

export interface SummonerModelState {
  name: string;
}

export interface SummonerModelType {
  namespace: 'summoner';
  state: SummonerModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer;
  };
}
const SummonerMoel: SummonerModelType = {
  namespace: 'summoner',
  state: {
    name: 'summoner',
  },
  effects: {
    *query({ payload }, { put, call }) {},
  },
  reducers: {
    save(state, { payload }) {},
  },
};
export default SummonerMoel;
