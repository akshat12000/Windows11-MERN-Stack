import { createReducer } from "@reduxjs/toolkit";
const intialState = {}

export const fileReducer = createReducer(intialState,{
    CreateFileRequest:(state)=>{
        state.loading = true;
    },
    CreateFileSuccess:(state,action)=>{
        state.loading = false;
        state.file = action.payload;
    },
    CreateFileFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    DeleteFileRequest:(state)=>{
        state.loading = true;
    },
    DeleteFileSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    DeleteFileFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    UpdateFileRequest:(state)=>{
        state.loading = true;
    },
    UpdateFileSuccess:(state,action)=>{
        state.loading = false;
        state.file = action.payload;
    },
    UpdateFileFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    GetFileRequest:(state)=>{
        state.loading = true;
    },
    GetFileSuccess:(state,action)=>{
        state.loading = false;
        state.file = action.payload;
    },
    GetFileFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    GetFilesRequest:(state)=>{
        state.loading = true;
    },
    GetFilesSuccess:(state,action)=>{
        state.loading = false;
        state.files = action.payload;
    },
    GetFilesFailure:(state,action)=>{
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
        state.file = null;
        state.files = null;
    }
})

