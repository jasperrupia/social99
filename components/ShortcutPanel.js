import React from 'react'

export default function ShortcutPanel() {
  return (
    <div className="widget">
        <h4 className="widget-title">Shortcuts</h4>
        <ul className="naves">
            <li>
                <i className="ti-clipboard"></i>
                <a href="newsfeed.html" title="">News feed</a>
            </li>
            <li>
                <i className="ti-mouse-alt"></i>
                <a href="inbox.html" title="">Inbox</a>
            </li>
            <li>
                <i className="ti-files"></i>
                <a href="fav-page.html" title="">My pages</a>
            </li>
            <li>
                <i className="ti-user"></i>
                <a href="timeline-friends.html" title="">friends</a>
            </li>
            <li>
                <i className="ti-image"></i>
                <a href="timeline-photos.html" title="">images</a>
            </li>
            <li>
                <i className="ti-video-camera"></i>
                <a href="timeline-videos.html" title="">videos</a>
            </li>
            <li>
                <i className="ti-comments-smiley"></i>
                <a href="messages.html" title="">Messages</a>
            </li>
            <li>
                <i className="ti-bell"></i>
                <a href="notifications.html" title="">Notifications</a>
            </li>
            <li>
                <i className="ti-share"></i>
                <a href="people-nearby.html" title="">People Nearby</a>
            </li>
            <li>
                <i className="fa fa-bar-chart-o"></i>
                <a href="insights.html" title="">insights</a>
            </li>
            <li>
                <i className="ti-power-off"></i>
                <a href="landing.html" title="">Logout</a>
            </li>
        </ul>
    </div>
        
  )
}
