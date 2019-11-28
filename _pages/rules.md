---
ID: 50509
post_title: rules
author: LIMODROID S2-rd🔭🔬
post_excerpt: ""
layout: page
permalink: >
  http://allianceofdroids.org.au/aod/rules/
published: true
post_date: 2017-07-04 08:47:33
---
<h3>Rules page</h3>
<strong>On this page you can add some information on how to play as a contender in the pool. The plugin supports several shortcodes that you can put in this text. See the help page in the admin for more information about the shortcodes.</strong>

<strong>The text below is an example for such a page.</strong>

<h3>Subscription</h3>
Subscription for the pool is easy. All you have to do is think of a login name and a valid email address. If you lost your password, you can generate a new one. Or ask the webmaster.

<h3>Predicting the matches</h3>
Predict the end score of all the matches in the tournament/competition. You have until 15 minutes before the start of a match to add or change your prediction.
The server time is used. No discussion about that, so be on time if you want to fill in your scores.

As you may have noticed the matches in the next stages are not yet filled at the beginning of the tournament. Once the teams are through to the next round, I will add them. These games can also be changed until 15 minutes before the game starts. Or, if you're feeling lucky, you can predict them now.

<h3>The bonus questions</h3>
You can earn extra points during the tournament with the bonus questions. These questions must be answered before a given date and time. Each questions shows the points you can earn.

<h3>The scoring</h3>
In the group phase the scores at the end of the game are used for the calculation of the scores. For final rounds the score at the end of the game including extra time is used. Goals in a penalty shoot-out are not taken into consideration.

You get points for predicting the correct winner of the match or prediction of a draw. We call this the toto score. In case you also predict the exact amount of goals scored, you get extra points. We call this the full score. If you got the goals correct you get the extra goal bonus, even if you didn't get the match result correct (e.g. match ends in 1-1 and you predicted 0-1 you will still get [fp-goalpoints] points). The last scoring options is the goal difference bonus: if you predict the correct winner, not the exact score, but you predicted the correct difference in goals, you get the goal difference bonus (e.g. you predicted 3-1 or 4-2 and result is 2-0).

<table>
<thead>
<tr>
<th></th>
<th>points</th>
</tr>
</thead>
<tbody>
<tr>
<td>toto score</td>
<td>[fp-totopoints]</td>
</tr>
<tr>
<td>full score</td>
<td>[fp-fullpoints]</td>
</tr>
<tr>
<tr>
<td>goal bonus</td>
<td>[fp-goalpoints]</td>
</tr>
<tr>
<tr>
<td>goal difference bonus</td>
<td>[fp-diffpoints]</td>
</tr>
<tr>
<td>bonus question</td>
<td>may be different for every question</td>
</tr>
</tbody>
</table>
If you want to view the ranking, then go to the <a href="[fp-link slug='ranking']">ranking page</a> and pick the correct league. If you're logged in, then the league for which you subscribed, is automatically picked.

<h3>The golden ball</h3>
Each player has one golden ball. If you place this ball next to a match the score for that match is multiplied by [fp-jokermultiplier]. You may place the golden ball next to every match and you can change your mind and move the golden ball, as long this match is still changeable. The golden ball is activated after the prediction for the match is locked. Once activated the golden ball cannot be moved anymore.

<h3>Same ranking?</h3>
When multiple players have the exact same amount of points, then the following sorting rules are applied on the ranking (most important one at the top):
<ol>
	<li>amount of full scores;</li>
	<li>amount of toto scores;</li>
	<li>amount of correct bonus questions.</li>
</ol>