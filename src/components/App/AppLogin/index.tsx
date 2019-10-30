import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../../store/ducks/authenticated';
import styles from './styles';

const AppLogin: FC = () => {
  const dispatch = useDispatch();
  const handlePress = (): void => {
    dispatch(setAuthenticated(true));
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.root}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
};

export default AppLogin;
