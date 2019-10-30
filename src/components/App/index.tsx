import NetInfo from '@react-native-community/netinfo';
import React, { FC, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { persistor } from '../../store';
import { getAuthenticated } from '../../store/ducks/authenticated';
import { setOnline } from '../../store/ducks/online';
import AppAuthenticated from './AppAuthenticated';
import AppGoOnline from './AppGoOnline';
import AppLogin from './AppLogin';
import AppOnline from './AppOnline';

const AppUsingRedux: FC = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(getAuthenticated);
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
      {authenticated && <AppAuthenticated />}
      {!authenticated && <AppLogin />}
    </>
  );
};

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading Redux Persistence</Text>} persistor={persistor}>
        <AppUsingRedux />
      </PersistGate>
    </Provider>
  );
};

export default App;
