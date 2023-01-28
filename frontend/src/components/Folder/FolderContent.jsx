import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getFolderContent } from '../../actions/Folder'
import File from '../File/File'
import Panel from '../Panel/Panel'
import Folder from './Folder'

const FolderContent = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getFolderContent(id)) 
    return ()=>dispatch({type:"clearFolder"})
  },[dispatch,id])

  const {folder} = useSelector(state=>state.oneFolder)
  return (
    <>
        <div>
            {folder?.folders&&folder?.folders?.map((folder)=>(
                <Folder key={folder._id} folder={folder} parent={id}/>
            ))}
        </div>
        <div>
            {folder?.files&&folder?.files?.map((file)=>(
                <File key={file._id} file={file} parent={id}/>
            ))}
        </div>
        <Panel/>
    </>
  )
}

export default FolderContent