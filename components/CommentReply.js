import React from 'react'

export default function CommentReply() {
  return (
    <>
        <div className="comet-avatar">
            <img src="images/resources/comet-2.jpg" alt=""/>
        </div>
        <div className="we-comment">
            <div className="coment-head">
                <h5><a href="time-line.html" title="">alexendra dadrio</a></h5>
                <span>1 month ago</span>
                <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
            </div>
            <div>yes, really very awesome car i see the features of this car in the official website of <a href="#" title="">#Mercedes-Benz</a> and really impressed :-)</div>
        </div>
    </>
  )
}
