import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">
                #
            </span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://blog.prepscholar.com/hs-fs/hubfs/feature_clouds.jpg?width=436&name=feature_clouds.jpg" alt="" />
            <Avatar src={user.photoURL} className='sidebar_avatar'>
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
            <p>Who viewed you</p>
                <p className="sidebar_statNumber">
                    2,543
                </p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">
                    2,448
                </p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('threejs')}
            {recentItem('programming')}
            {recentItem('python')}
            {recentItem('java')}

        </div>
    </div>
  )
}

export default Sidebar