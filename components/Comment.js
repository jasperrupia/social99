import React from 'react'

export default function Comment() {
  return (
    <>
        <div className="comet-avatar">
            <img src="images/resources/comet-1.jpg" alt=""/>
        </div>
        <div className="we-comment">
            <div className="coment-head">
                <h5><a href="time-line.html" title="">Jason borne</a></h5>
                <span>1 year ago</span>
                <a className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></a>
            </div>
            <div>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</div>
        </div>
    </>
  )
}
