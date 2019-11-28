---
ID: 52385
post_title: Thrive Theme is now fully migrated
author: Limo
post_excerpt: ""
layout: post
permalink: >
  http://allianceofdroids.org.au/aod/2017/09/09/thrive-theme-is-now-fully-migrated/
published: true
post_date: 2017-09-09 13:03:28
---
Thanks to Sean Firth, the Buddyapp theme has officially been taken over by the Thrive theme. You can still use buddyapp for your droidfolio (send me a personal message at http://allianceofdroids.org.au/aod/droidlings/droidologyiris to request this), but thrive will be used for all other pages.

Also, due to a funny glitch in maintenance mode that I couldn't sort out (it was only around for non-logged in users on the home page ONLY, so you could log in if you knew the link), so I used the Hostgator cPanel to redirect allianceofdroids.org.au to allianceofdroids.org.au/wp-login.php. This got rid of the glitch for non-logged-in users however when you want to go back to the homepage it would create a never-ending loop, where the home page would redirect to the login page, but since you were already logged in, it would continue.

I fixed this by changing the root of all pages to allianceofdroids.org.au/aod. Most pages should redirect, but remember that some don't. Remember to put /aod in as the root.

Also, the /members and /groups directory has changed. To reflect our droid passions, it is instead /aod/droidlings for the members and /aod/jedi-order/ for the groups.

Example:
<ul>
 	<li>My profile: http://allianceofdroids.org.au/aod/droidlings/droidologyiris</li>
 	<li>Non-created group: http://allianceofdroids.org.au/aod/jedi-order/my-awesome-bp-group/</li>
</ul>
The admin is still located at http://allianceofdroids.org.au/wp-admin/ so DO NOT put /aod as the root folder as it is NOT needed.

Limo

<hr />

http://allianceofdroids.org.au