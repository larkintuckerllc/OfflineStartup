import { FC, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOnline } from '../../../store/ducks/online';
import { getOnlineMode, setOnlineMode } from '../../../store/ducks/onlineMode';

const AppGoOnline: FC = () => {
  const dispatch = useDispatch();
  const online = useSelector(getOnline);
  const onlineMode = useSelector(getOnlineMode);
  const handlePress = useCallback((): void => {
    dispatch(setOnlineMode(true));
  }, [dispatch, setOnlineMode]);
  useEffect(() => {
    if (!online || onlineMode) {
      return;
    }
    Alert.alert(
      'Online Mode',
      'Do you want to go online?',
      [
        { text: 'Go Online', onPress: handlePress },
        {
          text: 'Stay Offline',
        },
      ],
      { cancelable: false }
    );
  }, [handlePress, online, onlineMode]);
  return null;
};

export default AppGoOnline;
