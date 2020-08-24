import { Effect, Reducer } from 'umi';

export interface ItemModelState {
  name: string;
}

export interface ItemModelType {
  namespace: 'item';
  state: ItemModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer;
  };
}
const ItemModel: ItemModelType = {
  namespace: 'item',
  state: {
    name: 'item',
  },
  effects: {
    *query({ payload }, { put, call }) {},
  },
  reducers: {
    save(state, { payload }) {},
  },
};

export default ItemModel;
