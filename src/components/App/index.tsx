import NetInfo from '@react-native-community/netinfo';
import React, { FC, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import store from '../../store';
import { setOnline } from '../../store/ducks/online';
import AppGoOnline from './AppGoOnline';
import AppOnline from './AppOnline';

const AppUsingRedux: FC = () => {
  const dispatch = useDispatch();
  const [onlineChecked, setOnlineChecked] = useState(false);
  // ONLINE
  useEffect(() => {
    const execute = async (): Promise<void> => {
      try {
        const state = await NetInfo.fetch();
        dispatch(setOnline(state.isConnected));
        setOnlineChecked(true);
      } catch (err) {
        //
      }
    };
    execute();
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setOnline(state.isConnected));
    });
    return unsubscribe;
  }, []);

  if (!onlineChecked) {
    return <Text>Checking Online</Text>;
  }
  return (
    <>
      <AppGoOnline />
      <AppOnline />
    </>
  );
};

const App: FC = () => {
  return (
    <Provider store={store}>
      <AppUsingRedux />
    </Provider>
  );
};

export default App;
