import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
            <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Today is a good day", "Top news - 9099 readers")}
        {newsArticle("Coronavirus is removed", "Top news - 890 readers")}
        {newsArticle("Bitcoin raising HIGH", "Top news - 43 readers")}
        {newsArticle("Three.js is on the roll!", "Top news - 458 readers")}
        {newsArticle("Code every day", "Top news - 456 readers")}
        {newsArticle("Linkedin clone!", "Top news - 890 readers")}
    </div>
  )
}

export default Widgets