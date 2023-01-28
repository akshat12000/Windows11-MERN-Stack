import axios from 'axios';

export const getFolder = (id) => async (dispatch) => {
    try{
        dispatch({type:"GetFoldersRequest"});
        const {data} = await axios.get(`/folder/one/${id}`);
        dispatch({type:"GetFoldersSuccess",payload:data});
    }catch(error){
        dispatch({type:"GetFoldersFailure",payload:error.response.data.message});
    }
}

export const getFolders = (parentFolder) => async (dispatch) => {
    try{
        dispatch({type:"GetFoldersRequest"});
        const {data} = await axios.get(`/folder/${parentFolder}`);
        dispatch({type:"GetFoldersSuccess",payload:data.folders});
    }catch(error){
        dispatch({type:"GetFoldersFailure",payload:error.response.data.message});
    }
}

export const getFolderContent = (id) => async (dispatch) => {
    try{
        dispatch({type:"GetFolderContentRequest"});
        const {data} = await axios.get(`/folder/content/${id}`);
        dispatch({type:"GetFolderContentSuccess",payload:data});
    }catch(error){
        dispatch({type:"GetFolderContentFailure",payload:error.response.data.message});
    }
}

export const createFolder = (name,parentFolder) => async (dispatch) => {
    try{
        dispatch({type:"CreateFolderRequest"});
        const {data} = await axios.post("/folder/create",{name,parent:parentFolder});
        dispatch({type:"CreateFolderSuccess",payload:data.folder});
    }catch(error){
        dispatch({type:"CreateFolderFailure",payload:error.response.data.message});
    }
}

export const deleteFolder = (id) => async (dispatch) => {
    try{
        dispatch({type:"DeleteFolderRequest"});
        await axios.delete(`/folder/delete/${id}`);
        dispatch({type:"DeleteFolderSuccess",payload:id});
    }catch(error){
        dispatch({type:"DeleteFolderFailure",payload:error.response.data.message});
    }
}

export const updateFolder = (id,name) => async (dispatch) => {
    try{
        dispatch({type:"updateFolderRequest"});
        const {data} = await axios.put(`/folder/update/${id}`,{name});
        dispatch({type:"updateFolderSuccess",payload:data.folder});
    }catch(error){
        dispatch({type:"updateFolderFailure",payload:error.response.data.message});
    }
}

