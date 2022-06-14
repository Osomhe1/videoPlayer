import React from 'react'
import { logout, selectUser } from './features/UserSlice'
import  {useDispatch, useSelector}  from 'react-redux'
import './Logout.css'
import VideoPlayer from './video/videoPlayer'

export const Logout = () => {
    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const handleLogout = (e) =>{
        e.preventDefault()

        
        dispatch(logout())
    }

    return (
        <div className='logout'>
            <h1>Welcome <span className='User__name'>{user.name}, You can now play your video</span> </h1>
            <VideoPlayer />
            
            <button className='logout__btn' onClick={(e) =>{handleLogout(e)}} >Logout</button>
        </div>
    )
}
