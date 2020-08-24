import React, { FC } from 'react';
import styles from './index.less';
import { ConnectProps, connect, SummonerModelState } from 'umi';

export interface PageProps extends ConnectProps {
  summoner: SummonerModelState;
}

const Summoner: FC<PageProps> = props => {
  return (
    <div>
      <h1 className={styles.title}>Page summoner</h1>
      <h1 className={styles.title}>{props.summoner.name}</h1>
    </div>
  );
};

export default connect(({ summoner }: { summoner: SummonerModelState }) => ({
  summoner,
}))(Summoner);
