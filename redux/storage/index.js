import MMKVStorage from 'react-native-mmkv-storage';
import React from 'react';
import App from '../../App';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor, createPersistStore} from '../store/store';
import { useState, useEffect } from 'react';

export const StorageProvider = props => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new MMKVStorage.Loader().initialize().then(instance => {
      createPersistStore(instance);
      setLoading(false);
    });
  });

  return loading ? null : (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  );
};
