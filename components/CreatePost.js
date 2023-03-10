import React from 'react'

export default function CreatePost() {
  return (
    <div className="central-meta">
        <div className="new-postbox">
            <figure>
                <img src="images/resources/admin2.jpg" alt=""/>
            </figure>
            <div className="newpst-input">
                <form method="post">
                    <textarea rows="2" placeholder="write something"></textarea>
                    <div className="attachments">
                        <ul>
                            <li>
                                <i className="fa fa-music"></i>
                                <label className="fileContainer">
                                    <input type="file"/>
                                </label>
                            </li>
                            <li>
                                <i className="fa fa-image"></i>
                                <label className="fileContainer">
                                    <input type="file"/>
                                </label>
                            </li>
                            <li>
                                <i className="fa fa-video-camera"></i>
                                <label className="fileContainer">
                                    <input type="file"/>
                                </label>
                            </li>
                            <li>
                                <i className="fa fa-camera"></i>
                                <label className="fileContainer">
                                    <input type="file"/>
                                </label>
                            </li>
                            <li>
                                <button type="submit">Post</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
