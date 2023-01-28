import axios from "axios";

export const loginUser = (email,password)=> async (dispatch)=>{
    try{
        dispatch({type:"LoginRequest"});
        const {data} = await axios.post("/user/login",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        });
        dispatch({type:"LoginSuccess",payload:data.user});
    }catch(error){
        dispatch({type:"LoginFailure",payload:error.response.data.message});
    }
}

export const registerUser = (name,email,password)=> async (dispatch)=>{
    try{
        dispatch({type:"RegisterRequest"});
        const {data} = await axios.post("/user/register",{name,email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        });
        dispatch({type:"RegisterSuccess",payload:data.user});
    }catch(error){
        dispatch({type:"RegisterFailure",payload:error.response.data.message});
    }
}


export const logoutUser = ()=> async (dispatch)=>{
    try{
        dispatch({type:"LogoutUserRequest"});
        await axios.get("/user/logout");
        dispatch({type:"LogoutUserSuccess"});
    }catch(error){
        dispatch({type:"LogoutUserFailure",payload:error.response.data.message});
    }
}

export const loadUser = ()=> async (dispatch)=>{
    try{
        dispatch({type:"LoadUserRequest"});
        const {data} = await axios.get("/user/profile");
        dispatch({type:"LoadUserSuccess",payload:data.user});
    }catch(error){
        dispatch({type:"LoadUserFailure",payload:error.response.data.message});
    }
}
