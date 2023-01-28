import { createReducer } from "@reduxjs/toolkit";
const intialState = {}

export const folderReducer = createReducer(intialState,{
    CreateFolderRequest:(state)=>{
        state.loading = true;
    },
    CreateFolderSuccess:(state,action)=>{
        state.loading = false;
        state.folder = action.payload;
    },
    CreateFolderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    GetFolderRequest:(state)=>{
        state.loading = true;
    },
    GetFolderSuccess:(state,action)=>{
        state.loading = false;
        state.folder = action.payload;
    },
    GetFolderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    GetFoldersRequest:(state)=>{
        state.loading = true;
    },
    GetFoldersSuccess:(state,action)=>{
        state.loading = false;
        state.folders = action.payload;
    },
    GetFoldersFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    DeleteFolderRequest:(state)=>{
        state.loading = true;
    },
    DeleteFolderSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    DeleteFolderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    updateFolderRequest:(state)=>{
        state.loading = true;
    },
    updateFolderSuccess:(state,action)=>{
        state.loading = false;
        state.folder = action.payload;
    },
    updateFolderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors:(state)=>{
        state.error = null;
    },
    clearMessages:(state)=>{
        state.message = null;
    },
    clearFolder:(state)=>{
        state.folder = null;
    }
});

export const oneFolderReducer = createReducer(intialState,{
    GetFolderContentRequest:(state)=>{
        state.loading = true;
    },
    GetFolderContentSuccess:(state,action)=>{
        state.loading = false;
        state.folder = action.payload;
    },
    GetFolderContentFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors:(state)=>{
        state.error = null;
    },
    clearMessages:(state)=>{
        state.message = null;
    },
    clearFolder:(state)=>{
        state.folder = null;
    }
});