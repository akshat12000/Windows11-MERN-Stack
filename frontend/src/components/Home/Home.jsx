import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../actions/File'
import { getFolders } from '../../actions/Folder'
import File from '../File/File'
import Folder from '../Folder/Folder'
import Panel from '../Panel/Panel'
import './Home.css'
// import TaskBar from '../TaskBar/TaskBar'

const Home = () => {
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(getFolders("63ce2a33982f772fa46f53da"))
    dispatch(getFiles("63ce2a33982f772fa46f53da"))
    return ()=>{
      dispatch({type:"clearFolder"})
      dispatch({type:"clearFile"})
    }
  },[dispatch])

  const {folders} = useSelector(state=>state.folder)
  const {files} = useSelector(state=>state.file)

  return (
    <>
      <div className='home-container'>
        {folders?.map((folder)=>(
          <Folder key={folder._id} folder={folder}/>
        ))}
        {files?.map((file)=>(
          <File key={file._id} file={file}/>
        ))}
      </div>
      <Panel/>
    </>
  )
}

export default Home