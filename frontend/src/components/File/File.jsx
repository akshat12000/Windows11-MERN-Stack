import React from 'react'
import { useState } from 'react'
import other from "../../images/Blank.png"
import audio from "../../images/Audio_File.png"
import notes from "../../images/Notes.png"
import video from "../../images/Video_File.png"
import image from "../../images/Pictures_File.png"
import './File.css'
import { useDispatch } from 'react-redux'
import { deleteFile, getFiles, updateFile } from '../../actions/File'
import { getFolderContent } from '../../actions/Folder'

const File = ({file,parent}) => {
  const [name,setName] = useState(file.name)
  const [type,setType] = useState(file.type)
  const [isEditing,setIsEditing] = useState(false)
  const [showDetails,setShowDetails] = useState(false)
  const dispatch = useDispatch()
  const file_dict = {
    "other":other,
    "audio":audio,
    "document":notes,
    "video":video,
    "image":image
  }

  const fileDetails = ()=>{
    setShowDetails(true)
  }
  const removeFile = async ()=>{
    await dispatch(deleteFile(file._id))
    await dispatch(getFiles(parent?parent:"63ce2a33982f772fa46f53da"))
    await dispatch(getFolderContent(parent?parent:"63ce2a33982f772fa46f53da"))
  }
  const editFile = async()=>{
    await dispatch(updateFile(name,type,file._id))
    await dispatch(getFiles(parent?parent:"63ce2a33982f772fa46f53da"))
    setIsEditing(false)
  }
  const showMenu = (e)=>{
    const newDiv = document.createElement('div')
    newDiv.className = 'folder-menu'
    newDiv.innerHTML = `
        <div className='folder-menu-item'>
            <p>Details</p>
        </div>  
        <div className='folder-menu-item'>
            <p>Rename</p>
        </div>
        <div className='folder-menu-item'>
            <p>Delete</p>
        </div>
    `
    newDiv.children[0].children[0].addEventListener('click',fileDetails)
    newDiv.children[1].children[0].addEventListener('click',()=>{setIsEditing(true)})
    newDiv.children[2].children[0].addEventListener('click',()=>{
        if(window.confirm('Are you sure you want to delete this folder?')){
            removeFile()
        }
    })
    newDiv.style.left = `${e.clientX}px`
    newDiv.style.top = `${e.clientY}px`
    e.target.appendChild(newDiv)
    e.target.addEventListener('mouseleave',()=>{
        newDiv.remove()
    })
  }
  return (
    <>
      <div className='folder-div' onMouseEnter={showMenu}>
            <img src={file_dict[type]} alt={name}/>
            <p>{name}</p>
      </div>
      {isEditing&&
        <div className='folder-edit-main'>
            <div className='folder-edit-div'>
                <div className='file-edit-div-header'>
                    Rename
                </div>
                <div className='file-edit-form'>
                    <label id="name">Name: </label>
                    <input type='text' value={name} id="name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='file-edit-form'>
                  <label htmlFor='type'>Type:</label>
                  <select name="type" id="type" value={type} onChange={(e)=>setType(e.target.value)}>
                      <option value="other">Other</option>
                      <option value="image">Image</option>
                      <option value="video">Video</option>
                      <option value="audio">Audio</option>
                      <option value="document">Document</option>
                  </select>
                </div>
                <button onClick={()=>editFile()}>Save</button>
                <button onClick={()=>setIsEditing(false)}>Cancel</button>
            </div>
        </div>
        }
        {showDetails&&
          <div className='folder-edit-main'>
          <div className='folder-edit-div'>
              <div className='file-edit-div-header'>
                  Details
              </div>
              <div className='file-edit-form'>
                  <label id="name">Name: </label>
                  <input type='text' value={name} id="name" disabled onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className='file-edit-form'>
                <label htmlFor='type'>Type:</label>
                <input type='text' value={type} id="type" disabled onChange={(e)=>setType(e.target.value)}/>
              </div>
              <button onClick={()=>setShowDetails(false)}>Close</button>
          </div>
      </div>
        }
    </>
  )
}

export default File