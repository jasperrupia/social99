import React from 'react'

export default function CreatePage() {
  return (
    <div className="widget">
        <div className="banner medium-opacity bluesh">
            {/* <div className="bg-image" style="background-image: url(images/resources/baner-widgetbg.jpg)"></div> */}
            <div className="baner-top">
                <span><img alt="" src="images/book-icon.png"/></span>
                <i className="fa fa-ellipsis-h"></i>
            </div>
            <div className="banermeta">
                <div>
                    create your own favourit page.
                </div>
                <span>like them all</span>
                <a data-ripple="" title="" href="#">start now!</a>
            </div>
        </div>											
    </div>
  )
}
