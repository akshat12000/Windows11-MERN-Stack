import React from 'react'
import folderImg from "../../images/folder.png"
import "./Folder.css"
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getFolders,deleteFolder, updateFolder, getFolderContent } from '../../actions/Folder'

const Folder = ({folder,parent}) => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const [name , setName] = React.useState(folder.name)
  const [isEditing , setIsEditing] = React.useState(false)
  const openFolder = ()=>{
    history(`/folder/${folder._id}`)
  }
  const editFolder =  async ()=>{
    await dispatch(updateFolder(folder._id,name))
    await dispatch(getFolders(parent?parent:"63ce2a33982f772fa46f53da"))
    await dispatch(getFolderContent(parent))
    setIsEditing(false)
  }
  const removeFolder = async ()=>{
    await dispatch(deleteFolder(folder._id))
    await dispatch(getFolders(parent?parent:"63ce2a33982f772fa46f53da"))
    await dispatch(getFolderContent(parent))
  }
  const showMenu = (e)=>{
    const newDiv = document.createElement('div')
    newDiv.className = 'folder-menu'
    newDiv.innerHTML = `
        <div className='folder-menu-item'>
            <p>Open</p>
        </div>  
        <div className='folder-menu-item'>
            <p>Rename</p>
        </div>
        <div className='folder-menu-item'>
            <p>Delete</p>
        </div>
    `
    newDiv.children[0].children[0].addEventListener('click',openFolder)
    newDiv.children[1].children[0].addEventListener('click',()=>{setIsEditing(true)})
    newDiv.children[2].children[0].addEventListener('click',()=>{
        if(window.confirm('Are you sure you want to delete this folder?')){
            removeFolder()
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
            <img src={folderImg} alt={folder.name}/>
            <p>{folder.name}</p>
        </div>
        {isEditing&&
        <div className='folder-edit-main'>
            <div className='folder-edit-div'>
                <div className='folder-edit-div-header'>
                    Rename
                </div>
                <div className='folder-edit-form'>
                    <label id="name">Name: </label>
                    <input type='text' value={name} id="name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <button onClick={editFolder}>Save</button>
                <button onClick={()=>setIsEditing(false)}>Cancel</button>
            </div>
        </div>
        }
    </>
  )
}

export default Folder