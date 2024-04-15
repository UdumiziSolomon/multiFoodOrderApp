import React, { useLayoutEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetworkStatus = () => {
  const [isConnected, setConnected] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected;
};

export default useNetworkStatus;
