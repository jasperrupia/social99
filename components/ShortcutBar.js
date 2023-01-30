import React from 'react'

export default function ShortcutBar() {
  return (
    <div className="fixed-sidebar left">
		<div className="menu-left">
			<ul className="left-menu">
				<li><a href="newsfeed.html" title="Newsfeed Page" data-toggle="tooltip" data-placement="right"><i className="ti-magnet"></i></a></li>
				<li><a href="fav-page.html" title="favourit page" data-toggle="tooltip" data-placement="right"><i className="fa fa-star-o"></i></a></li>
				<li><a href="insights.html" title="Account Stats" data-toggle="tooltip" data-placement="right"><i className="ti-stats-up"></i></a></li>
				<li><a href="inbox.html" title="inbox" data-toggle="tooltip" data-placement="right"><i className="ti-import"></i></a></li>
				<li><a href="messages.html" title="Messages" data-toggle="tooltip" data-placement="right"><i className="ti-comment-alt"></i></a></li>
				<li><a href="edit-account-setting.html" title="Setting" data-toggle="tooltip" data-placement="right"><i className="ti-panel"></i></a></li>
				<li><a href="faq.html" title="Faq's" data-toggle="tooltip" data-placement="right"><i className="ti-light-bulb"></i></a></li>
				<li><a href="timeline-friends.html" title="Friends" data-toggle="tooltip" data-placement="right"><i className="ti-themify-favicon"></i></a></li>
				<li><a href="widgets.html" title="Widgets" data-toggle="tooltip" data-placement="right"><i className="ti-eraser"></i></a></li>
				<li><a href="notifications.html" title="Notification" data-toggle="tooltip" data-placement="right"><i className="ti-bookmark-alt"></i></a></li>
			</ul>
		</div>
	</div>
  )
}
