import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createFile, getFiles } from '../../actions/File'
import './CreateFile.css'

const CreateFile = () => {
    const {folder:parentFolder} = useSelector(state=>state.oneFolder)
    const [name,setName] = React.useState("")
    const history = useNavigate()
    const dispatch = useDispatch()
    const [parent, setParent] = React.useState(parentFolder?parentFolder.name:'desktop')
    const [type,setType] = React.useState("other")
    const [id,setId] = React.useState(parentFolder?parentFolder.id:"63ce2a33982f772fa46f53da")
    const handleSubmit = async (e)=>{
        e.preventDefault()
        await dispatch(createFile(name,id,type))
        await dispatch(getFiles(id))
        if(parentFolder===undefined){
            history("/")
        }else{
            history(`/folder/${id}`)
        }
    }

  return (
    <div className='create-folder-container'>
        <div className='create-folder-box'>
            <div className='create-folder-header'>
                Create File
            </div>
            <div className='create-folder-form'>
                <label htmlFor='name'>Name:</label>
                <input required value={name} onChange={(e)=>setName(e.target.value)} type='text' name='name' id='name' />
            </div>
            <div className='create-folder-form'>
                <label htmlFor='parent'>Parent:</label>
                <input required value={parent} disabled onChange={(e)=>setParent(e.target.value)} type='text' name='parent' id='parent' />
            </div>
            <div className='create-folder-form'>
                <label htmlFor='type'>Type:</label>
                <select name="type" id="type" value={type} onChange={(e)=>setType(e.target.value)}>
                    <option value="other">Other</option>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                    <option value="document">Document</option>
                </select>
            </div>
            <div className='create-folder-btn-grp'>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CreateFile