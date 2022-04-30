import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post_header">
            <Avatar src={photoUrl}>
                {name}
            </Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOption Icon={ThumbUpIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatIcon} title="Comment" color="gray"/>
            <InputOption Icon={ShareIcon} title="Share" color="gray"/>
            <InputOption Icon={SendIcon} title="Send" color="gray"/>


        </div>
    </div>
  )
})

export default Post