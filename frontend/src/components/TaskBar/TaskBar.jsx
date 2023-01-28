import React from 'react'
import svg  from "../../images/win11.svg"
import Computer from "../../images/Computer.png"
import winStore from "../../images/winStore.png"
import winMail from "../../images/winMail.png"
import startMenu from "../../images/Start_Menu.png"
import shutDown from "../../images/shut_down.png"
import "./TaskBar.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions/User'

const TaskBar = () => {
  const [showStartMenu, setShowStartMenu] = React.useState(false)
  const {user} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const createTooltip = (e,pad=null,shift=null,txt=null) => {
        // console.log(typeof e.clientX, typeof e.clientY)
        const tooltip = document.createElement('div')
        const iconDiv = document.querySelector('.icons-div')
        tooltip.classList.add('tooltip')
        tooltip.style.left = pad?pad:`${e.clientX}px`
        if(shift) tooltip.style.bottom = shift
        if(txt) tooltip.innerText = txt
        else tooltip.innerText = e.target.alt
        iconDiv.appendChild(tooltip)
        e.target.addEventListener('mouseleave',()=>{
            tooltip.remove()
        })
    }   
    const logoutHandler = () => {
        dispatch(logoutUser())
    }
  return (
    <div className='TaskBar-container'>
        <div className='icons-div'>
            <img src={svg} alt="Start" onMouseEnter={(e)=>createTooltip(e,"40.5rem")} onClick={()=>setShowStartMenu(!showStartMenu)}/>
            <img src={Computer} alt="This PC" onMouseEnter={(e)=>createTooltip(e,"44rem")} />
            <img src={winStore} alt="Store" onMouseEnter={(e)=>createTooltip(e,"48rem")} />
            <img src={winMail} alt="Mail" onMouseEnter={(e)=>createTooltip(e,"52rem")} />
        </div>
        { showStartMenu&&
        <div className='start-menu'>
            <img src={startMenu} alt="Start Menu"/>
            <div className='start-menu-footer'>
                <div><Link to="/profile" onMouseEnter={(e)=>createTooltip(e,null,"9rem",user.name)}>{user.name}</Link></div>
                <div className='logout-div'><img src={shutDown} onClick={logoutHandler} alt="Log Out" onMouseEnter={(e)=>createTooltip(e,null,"9rem")}/></div>
            </div>
        </div>
        }
    </div>
  )
}

export default TaskBar