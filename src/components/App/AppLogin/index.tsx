import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated } from '../../../store/ducks/authenticated';
import { getOnlineMode } from '../../../store/ducks/onlineMode';
import styles from './styles';

const AppLogin: FC = () => {
  const onlineMode = useSelector(getOnlineMode);
  const dispatch = useDispatch();
  const handlePress = (): void => {
    dispatch(setAuthenticated(true));
  };

  if (!onlineMode) {
    return <Text>Login (Waiting for Go Online)</Text>;
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.root}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
};

export default AppLogin;
