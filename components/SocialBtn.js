import React from "react";

export default function SocialBtn() {
  return (
    <div className="we-video-info">
      <ul>
        <li>
          <span className="views" data-toggle="tooltip" title="views">
            <i className="fa fa-eye"></i>
            <ins>1.2k</ins>
          </span>
        </li>
        <li>
          <span className="comment" data-toggle="tooltip" title="Comments">
            <i className="fa fa-comments-o"></i>
            <ins>52</ins>
          </span>
        </li>
        <li>
          <span className="like" data-toggle="tooltip" title="like">
            <i className="ti-heart"></i>
            <ins>2.2k</ins>
          </span>
        </li>
        <li>
          <span className="dislike" data-toggle="tooltip" title="dislike">
            <i className="ti-heart-broken"></i>
            <ins>200</ins>
          </span>
        </li>
        <li className="social-media">
          <div className="menu">
            <div className="btn trigger">
              <i className="fa fa-share-alt"></i>
            </div>
            <div className="rotater">
              <div className="btn btn-icon">
                <a href="#" title="">
                  <i className="fa fa-html5"></i>
                </a>
              </div>
            </div>
            <div className="rotater">
              <div className="btn btn-icon">
                <a href="#" title="">
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="rotater">
              <div className="btn btn-icon">
                <a href="#" title="">
                  <i className="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
            <div className="rotater">
              <div className="btn btn-icon">
                <a href="#" title="">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="rotater">
              <div className="btn btn-icon">
                <a href="#" title="">
                  <i className="fa fa-css3"></i>
                </a>
              </div>
            </div>
            <div className="rotater">
              <div className="btn btn-icon">
                <a href="#" title="">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="rotater">
              <div className="btn btn-icon">
                <a href="#" title="">
                  <i className="fa fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="rotater">
              <div className="btn btn-icon">
                <a href="#" title="">
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
