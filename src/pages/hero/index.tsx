import React, { FC } from 'react';
import styles from './index.less';
import { HeroModelState, connect, ConnectProps, Loading } from 'umi';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const Hero: FC<PageProps> = props => {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>This {props.hero.name}</h1>
    </div>
  );
};
export default connect(
  ({ hero, loading }: { hero: HeroModelState; loading: Loading }) => ({
    hero,
    loading,
  }),
)(Hero);
