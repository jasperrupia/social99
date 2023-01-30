import Head from "next/head";
import BottomBar from "../components/BottomBar";
import CreatePage from "../components/CreatePage";
import CreatePost from "../components/CreatePost";
import Following from "../components/Following";
import MyPageIntro from "../components/MyPageIntro";
import NavResponsive from "../components/NavResponsive";
import PeopleOnlineBar from "../components/PeopleOnlineBar";
import PostImage from "../components/PostImage";
import Post from "../components/Post";
import PostMap from "../components/PostMap";
import PostVideo from "../components/PostVideo";
import ProfileIntro from "../components/ProfileIntro";
import RecentActivities from "../components/RecentActivities";
import Settings from "../components/Settings";
import Settings2 from "../components/Settings2";
import ShortcutBar from "../components/ShortcutBar";
import ShortcutPanel from "../components/ShortcutPanel";
import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="images/community.jpg" type="image/png" sizes="16x16" />
        <title>Social Network</title>
      </Head>

      {/* <div className="se-pre-con"></div> */}
      <div className="theme-layout">
        <div className="responsive-header">
          <div className="mh-head first Sticky">
            <span className="mh-btns-left">
              <a className="" href="#menu">
                <i className="fa fa-align-justify"></i>
              </a>
            </span>
            <span className="mh-text">
              <a href="newsfeed.html" title="">
                <img src="images/logo2.png" alt="" />
              </a>
            </span>
            <span className="mh-btns-right">
              <a className="fa fa-sliders" href="#shoppingbag"></a>
            </span>
          </div>
          <div className="mh-head second">
            <form className="mh-form">
              <input placeholder="search" />
              <a href="#/" className="fa fa-search"></a>
            </form>
          </div>
          <NavResponsive />
          <Settings2 />
        </div>

        <TopBar />
        <PeopleOnlineBar />
        <ShortcutBar />

        <section>
          <div className="gap2 gray-bg">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row merged20" id="page-contents">
                    <div className="col-lg-3">
                      <aside className="sidebar static left">
                        <ShortcutPanel />
                        <RecentActivities />
                        <Following />
                      </aside>
                    </div>
                    <div className="col-lg-6 px-5">
                      <CreatePost />
                      <div className="loadMore">
                        <PostImage />
                        <PostVideo />
                        <PostMap />
                        <Post />
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <aside className="sidebar static right">
                        <MyPageIntro />
                        <CreatePage />
                        <ProfileIntro />
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BottomBar />
      </div>
      <Settings />
    </>
  );
}
