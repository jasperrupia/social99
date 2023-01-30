import React from "react";
import SocialBtn from "./SocialBtn";

export default function Post() {
  return (
    <div className="central-meta item">
      <div className="user-post">
        <div className="friend-info">
          <figure>
            <img alt="" src="images/resources/friend-avatar10.jpg" />
          </figure>
          <div className="friend-name">
            <ins>
              <a title="" href="time-line.html">
                Janice Griffith
              </a>
            </ins>
            <span>published: june,2 2018 19:PM</span>
          </div>
          <div className="description">
            <div>
              Curabitur World's most beautiful car in{" "}
              <a title="" href="#">
                #test drive booking !
              </a>{" "}
              the most beatuiful car available in america and the saudia arabia,
              you can book your test drive by our official website
            </div>
          </div>
          <div className="post-meta">
            <div className="linked-image align-left">
              <a title="" href="#">
                <img alt="" src="images/resources/page1.jpg" />
              </a>
            </div>
            <div className="detail">
              <span>Love Maid - ChillGroves</span>
              <div>
                Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...{" "}
              </div>
              <a title="" href="#">
                www.sample.com
              </a>
            </div>
            <SocialBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
