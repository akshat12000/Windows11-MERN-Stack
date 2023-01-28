import React from 'react'
import { Link } from 'react-router-dom'
import "./Panel.css"

const Panel = () => {
  return (
    <div className='panel-container'>
        <button><Link to="/folder/create">Create Folder</Link></button>
        <button><Link to="/file/create">Create File</Link></button>
    </div>
  )
}

export default Panel