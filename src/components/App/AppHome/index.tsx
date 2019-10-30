import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '../../../store/ducks/authenticated';
import styles from './styles';

const AppHome: FC = () => {
  const dispatch = useDispatch();
  const handlePress = (): void => {
    dispatch(setAuthenticated(false));
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.root}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );
};

export default AppHome;
