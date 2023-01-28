import axios from "axios"

export const createFile = (name,parent,type)=> async(dispatch)=>{
    try{
        dispatch({type:"CreateFileRequest"})
        const {data} = await axios.post("/file/create",{name,parent,type})
        dispatch({type:"CreateFileSuccess",payload:data.file})
    }catch(error){
        dispatch({type:"CreateFileFailure",payload:error.response.data.message});
    }
}

export const getFile = (id) => async(dispatch)=>{
    try{
        dispatch({type:"GetFileRequest"})
        const {data} = await axios.get(`/file/${id}`)
        dispatch({type:"GetFileSuccess",payload:data.file})
    }catch(error){
        dispatch({type:"GetFileFailure",payload:error.response.data.message})
    }
}

export const getFiles = (parent) => async(dispatch)=>{
    try{
        dispatch({type:"GetFilesRequest"})
        const {data} = await axios.get(`/file/${parent}`)
        dispatch({type:"GetFilesSuccess",payload:data.files})
    }catch(error){
        dispatch({type:"GetFilesFailure",payload:error.response.data.message})
    }
}

export const updateFile = (name,type,id) => async(dispatch)=>{
    try{
        dispatch({type:"UpdateFileRequest"})
        const {data} = await axios.put(`/file/update/${id}`,{name,type})
        dispatch({type:"UpdateFileSuccess",payload:data.file})
    }catch(error){
        dispatch({type:"UpdateFileFailure",payload:error.response.data.message})
    }
}

export const deleteFile = (id) => async(dispatch)=>{
    try{
        dispatch({type:"DeleteFileRequest"})
        const {data} = await axios.delete(`/file/delete/${id}`)
        dispatch({type:"DeleteFileSuccess",payload:data.file})
    }catch(error){
        dispatch({type:"DeleteFileFailure",payload:error.response.data.message})
    }
}