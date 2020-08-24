import React, { FC } from 'react';
import styles from './index.less';
import { ConnectProps, connect, ItemModelState } from 'umi';
interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const Item: FC<PageProps> = ({ item }) => {
  return (
    <div>
      <h1 className={styles.title}>Page item</h1>
      <h1 className={styles.title}>This is {item.name}</h1>
    </div>
  );
};

export default connect(({ item }: { item: ItemModelState }) => ({ item }))(
  Item,
);
