// Imports: Dependencies

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
// Imports: Redux
import rootReducer from '../reducers/index';

// Middleware: Redux Persist Config

var persistedReducer;
var store;
let persistor;

export const persistConfig = {

  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage:null,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'authReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    'counterReducer',
  ],
};

export function createPersistStore(storage) {
  persistConfig.storage = storage;  
  persistedReducer = persistReducer(persistConfig, rootReducer)

  store = createStore(
    persistedReducer,
    applyMiddleware(
      createLogger(),
    ),
  );
  persistor = persistStore(store);
}

export {
  store,
  persistor,
};