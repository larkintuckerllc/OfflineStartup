import React, { FC, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstLoad, setFirstLoad } from '../../../store/ducks/firstLoad';
import { setOnlineMode } from '../../../store/ducks/onlineMode';
import AppHome from '../AppHome';

const delay = (): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

const AppLoading: FC = () => {
  const dispatch = useDispatch();
  const firstLoad = useSelector(getFirstLoad);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const execute = async (): Promise<void> => {
      try {
        await delay();
        // throw new Error(); // ERROR CASE
        dispatch(setFirstLoad(false)); // SUCCESS CASE
        setLoading(false); // SUCCESS CASE
      } catch (e) {
        dispatch(setOnlineMode(false));
      }
    };
    execute();
  }, [dispatch, setLoading, setOnlineMode]);

  if (loading) {
    return (
      <Text>
        Loading&nbsp;
        {firstLoad ? 'First' : 'Subsequent'}
      </Text>
    );
  }
  return <AppHome />;
};

export default AppLoading;
