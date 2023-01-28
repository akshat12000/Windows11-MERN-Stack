import {configureStore} from '@reduxjs/toolkit';
import { fileReducer } from './reducers/File';
import { folderReducer, oneFolderReducer } from './reducers/Folder';
import { userProfileReducer, userReducer } from './reducers/User';

const store = configureStore({
    reducer: {
        // Add your reducers here
        user: userReducer,
        userProfile: userProfileReducer,
        folder:folderReducer,
        oneFolder:oneFolderReducer,
        file:fileReducer
    }
});

export default store;