import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CreateFolder.css'
import { createFolder, getFolders } from '../../actions/Folder'
import { useNavigate } from 'react-router-dom'

const CreateFolder = () => {
  const {folder:parentFolder} = useSelector(state=>state.oneFolder)
  const [name, setName] = React.useState('')
  const [id,setId] = React.useState(parentFolder?parentFolder.id:"63ce2a33982f772fa46f53da")
  const {message,error} = useSelector(state => state.folder)
  const [parent, setParent] = React.useState(parentFolder?parentFolder.name:'desktop')

  const dispatch = useDispatch()
  const history = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(id)
    await dispatch(createFolder(name,id))
    await dispatch(getFolders(id))
    if(parentFolder===undefined){
      history("/")
    }else{
      history(`/folder/${id}`)
    }
  }

  useEffect(()=>{
    if(error){
      alert(error);
      dispatch({type:"clearErrors"})
    } 
    if(message){
      alert(message);
      dispatch({type:"clearMessage"})
    }
  },[error,dispatch,message])

  return (
    <div className='create-folder-container'>
        <div className='create-folder-box'>
            <div className='create-folder-header'>
                Create Folder
            </div>
            <div className='create-folder-form'>
                <label htmlFor='name'>Name:</label>
                <input required value={name} onChange={(e)=>setName(e.target.value)} type='text' name='name' id='name' />
            </div>
            <div className='create-folder-form'>
                <label htmlFor='parent'>Parent:</label>
                <input required value={parent} disabled onChange={(e)=>setParent(e.target.value)} type='text' name='parent' id='parent' />
            </div>
            <div className='create-folder-btn-grp'>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CreateFolder