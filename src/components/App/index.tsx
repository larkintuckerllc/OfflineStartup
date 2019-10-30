import NetInfo from '@react-native-community/netinfo';
import React, { FC, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { persistor } from '../../store';
import { getAuthenticated } from '../../store/ducks/authenticated';
import { getFirstLoad } from '../../store/ducks/firstLoad';
import { setOnline } from '../../store/ducks/online';
import { getOnlineMode } from '../../store/ducks/onlineMode';
import AppHome from './AppHome';
import AppLoading from './AppLoading';
import AppGoOnline from './AppGoOnline';
import AppLogin from './AppLogin';
import AppOnline from './AppOnline';

const AppUsingRedux: FC = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(getAuthenticated);
  const firstLoad = useSelector(getFirstLoad);
  const onlineMode = useSelector(getOnlineMode);
  const [onlineChecked, setOnlineChecked] = useState(false);
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
      {onlineMode && authenticated && <AppLoading />}
      {onlineMode && !authenticated && <AppLogin />}
      {!onlineMode && authenticated && firstLoad && <Text>Wait to Load</Text>}
      {!onlineMode && authenticated && !firstLoad && <AppHome />}
      {!onlineMode && !authenticated && <Text>Wait to Login</Text>}
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
