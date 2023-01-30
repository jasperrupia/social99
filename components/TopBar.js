import React from 'react'

export default function TopBar() {
  return (
    <div className="topbar stick">
		<div className="logo">
			<a title="" href="newsfeed.html"><img src="images/social.png" alt=""/></a>
		</div>
		
		<div className="top-area">
			<div className="top-search">
				<form method="post" className="">
					<input type="text" placeholder="Search Friend"/>
					<button data-ripple><i className="ti-search"></i></button>
				</form>
			</div>
			<ul className="setting-area">
				<li><a href="newsfeed.html" title="Home" data-ripple=""><i className="ti-home"></i></a></li>
				<li>
					<a href="#" title="Notification" data-ripple="">
						<i className="ti-bell"></i><span>20</span>
					</a>
					<div className="dropdowns">
						<span>4 New Notifications</span>
						<ul className="drops-menu">
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-1.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>sarah Loren</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag green">New</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-2.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Jhon doe</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag red">Reply</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-3.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Andrew</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag blue">Unseen</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-4.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Tom cruse</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag">New</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-5.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Amy</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag">New</span>
							</li>
						</ul>
						<a href="notifications.html" title="" className="more-mesg">view more</a>
					</div>
				</li>
				<li>
					<a href="#" title="Messages" data-ripple=""><i className="ti-comment"></i><span>12</span></a>
					<div className="dropdowns">
						<span>5 New Messages</span>
						<ul className="drops-menu">
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-1.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>sarah Loren</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag green">New</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-2.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Jhon doe</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag red">Reply</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-3.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Andrew</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag blue">Unseen</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-4.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Tom cruse</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag">New</span>
							</li>
							<li>
								<a href="notifications.html" title="">
									<img src="images/resources/thumb-5.jpg" alt=""/>
									<div className="mesg-meta">
										<h6>Amy</h6>
										<span>Hi, how r u dear ...?</span>
										<i>2 min ago</i>
									</div>
								</a>
								<span className="tag">New</span>
							</li>
						</ul>
						<a href="messages.html" title="" className="more-mesg">view more</a>
					</div>
				</li>
				<li><a href="#" title="Languages" data-ripple=""><i className="fa fa-globe"></i></a>
					<div className="dropdowns languages">
						<a href="#" title=""><i className="ti-check"></i>English</a>
						<a href="#" title="">Arabic</a>
						<a href="#" title="">Dutch</a>
						<a href="#" title="">French</a>
					</div>
				</li>
			</ul>
			<div className="user-img">
				<img src="images/resources/admin.jpg" alt=""/>
				<span className="status f-online"></span>
				<div className="user-setting">
					<a href="#" title=""><span className="status f-online"></span>online</a>
					<a href="#" title=""><span className="status f-away"></span>away</a>
					<a href="#" title=""><span className="status f-off"></span>offline</a>
					<a href="#" title=""><i className="ti-user"></i> view profile</a>
					<a href="#" title=""><i className="ti-pencil-alt"></i>edit profile</a>
					<a href="#" title=""><i className="ti-target"></i>activity log</a>
					<a href="#" title=""><i className="ti-settings"></i>account setting</a>
					<a href="#" title=""><i className="ti-power-off"></i>log out</a>
				</div>
			</div>
			<span className="ti-menu main-menu" data-ripple=""></span>
		</div>
	</div>
  )
}
