import React, { FC, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOnline } from '../../../store/ducks/online';
import { getOnlineMode, setOnlineMode } from '../../../store/ducks/onlineMode';
import styles from './styles';

const AppOnline: FC = () => {
  const dispatch = useDispatch();
  const online = useSelector(getOnline);
  const onlineMode = useSelector(getOnlineMode);
  const handlePress = useCallback((): void => {
    dispatch(setOnlineMode(true));
  }, [dispatch, setOnlineMode]);
  return (
    <View style={styles.root}>
      <Text>
        Online:
        {online ? 'Online' : 'Offline'}
      </Text>
      <Text>
        Online Mode:
        {onlineMode ? 'Online' : 'Offline'}
      </Text>
      {online && !onlineMode && (
        <TouchableOpacity onPress={handlePress} style={styles.rootGoOnline}>
          <Text>Go Online</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppOnline;
