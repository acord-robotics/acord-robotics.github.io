---
ID: 59519
post_title: Open Source Rover
author: Liam Arbuckle
post_excerpt: 'Thanks to NASA & Github, we have a way  to (kind of) recreate the Mars 2020 rover in our own backyard. This  means we can create another branch of robots - the ones inspired by  space probes and rovers. All branches can be controlled in Stellarios  (see this post on how releases work).'
layout: post
permalink: >
  http://allianceofdroids.org.au/aod/2019/08/22/open-source-rover/
published: true
post_date: 2019-08-22 20:17:40
---
<!-- wp:paragraph -->
<p> Thanks to NASA &amp; Github, we have a way 
to (kind of) recreate the Mars 2020 rover in our own backyard. This 
means we can create another branch of robots - the ones inspired by 
space probes and rovers. All branches can be controlled in Stellarios 
(see <a href="https://acord-robotics.github.io/stellarios/hydejack/releases/2019-07-31-8.5.0/">this post</a> on how releases work).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>According to NASA, the Open Source Rover is</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><p>“The  JPL Open Source Rover is an open source, build it yourself, scaled down  version of the 6 wheel rover design that JPL uses to explore the  surface of Mars. The Open Source Rover is designed almost entirely out  of consumer off the shelf (COTS) parts. This project is intended to be a  teaching and learning experience for those who want to get involved in  mechanical engineering, software, electronics, or robotics.”</p><cite>NASA Jet Propulsion Lab</cite></blockquote>
<!-- /wp:quote -->

<!-- wp:code -->
<pre class="wp-block-code"><code>void Screen::display_state(){
  if (state == RUNNING){
    RGBmatrixPanel::drawPixel(STATE[0], STATE[1], RGBmatrixPanel::Color444(GREEN));        
  }
  else if (state == IDLE){
    RGBmatrixPanel::drawPixel(STATE[0], STATE[1], RGBmatrixPanel::Color444(RED));
  } else if (state == 0x00){
    RGBmatrixPanel::drawPixel(STATE[0], STATE[1], RGBmatrixPanel::Color444(WHITE));
  }
}
</code></pre>
<!-- /wp:code -->

<!-- wp:list -->
<ul><li>A sample of the code that the OSR runs on</li></ul>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>Technical Attributes</h2>
<!-- /wp:heading -->

<!-- wp:table -->
<table class="wp-block-table"><tbody><tr><td>Weight</td><td>25 [lbs]</td><td>11.34[kg]</td></tr><tr><td>Footprint</td><td>24x14 [in]</td><td>60.96x30.48 [cm]</td></tr><tr><td>Battery Capacity</td><td>5200 [mAh]</td><td>5200 [mAh]</td></tr><tr><td>Battery Discharge Rate</td><td>8 [A]</td><td>8 [A]</td></tr><tr><td>Nominal Current Draw</td><td>1.2 [A]</td><td>1.2 [A]</td></tr><tr><td>Operating time</td><td>5 [hrs] (continual use)</td><td>5 [hrs] (continual use)</td></tr><tr><td>Approximate Max speed</td><td>9.7 [in/s]</td><td>24.6 [cm/s]</td></tr><tr><td>Maximum 90 deg vertical scale</td><td>12 [in]</td><td>30.48 [cm]</td></tr><tr><td>Maximum height differential between sides</td><td>14 [in]</td><td>35.56 [cm]</td></tr><tr><td>Communication (in this guide)</td><td>Bluetooth app (Android only) and Xbox Controller</td><td>&nbsp;</td></tr><tr><td>Cost</td><td>~ $2,500</td></tr></tbody></table>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p>From Github/NASA-JPL/Open-Source-Rover</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3>Notes</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul><li>Cost is in US Dollars</li><li>We are using metric measurements</li><li>We will probably use an Android app, maybe with the Arduino Esplora we acquired</li><li>We’ve forked this repo to <a href="http://github.com/acord-robotics/stellarios/tree/arduino">Github/Acord-Robotics/Open-Source-Rover</a></li><li>We can change the parts, however by changing the parts we may improve one thing but compromise another -</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>“One
 potential change is for the motors; you can, for example, select higher
 RPM motors (to drive your rover faster) at the sacrifice of max stall 
torque, which would potentially limit your rover’s ability to climb” 
(from the Project’s Readme)</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>We can use our <a href="https://maker.pro/raspberry-pi/tutorial/how-to-connect-and-interface-raspberry-pi-with-arduino">Arduino Esplora Board to communicate with the Raspberry Pi</a> - as the board has a joystick and buttons, so it is sort of a mini-controller</li><li>There is a <a href="https://www.tapatalk.com/groups/jpl_opensource_rover/">Tapatalk Forum</a> - <a href="https://opensourcerover.jpl.nasa.gov/">Landing Site</a></li><li>The partslist is located <a href="https://github.com/acord-robotics/open-source-rover">here</a> &amp; on the <a href="http://allianceofdroids.org.au/aod/jedi-order/droidologists">ACORD forums</a></li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Stellarios
 is the official operating system and app of ACORD. Stellarios will be 
designed to work on MacOS &amp; Windows devices, and there will be apps 
created for Android, iOS &amp; Linux devices. Stellarios is going to be a
 bundle of applications that will be used by ACORD Corporation members 
to perform certain operations.</p>
<!-- /wp:paragraph -->