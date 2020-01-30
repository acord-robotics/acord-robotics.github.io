---
ID: 64336
post_title: Github Readme Tutorial
author: Liam Arbuckle
post_excerpt: ""
layout: post
permalink: >
  http://allianceofdroids.org.au/aod/2019/11/01/github-readme-tutorial/
published: true
post_date: 2019-11-01 12:15:27
---
<!-- wp:embed {"url":"https://dev.to/scottydocs/how-to-write-a-kickass-readme-5af9?utm_source=digest_mailer\u0026utm_medium=email\u0026utm_campaign=digest_email"} -->
<figure class="wp-block-embed"><div class="wp-block-embed__wrapper">
https://dev.to/scottydocs/how-to-write-a-kickass-readme-5af9?utm_source=digest_mailer&amp;utm_medium=email&amp;utm_campaign=digest_email
</div></figure>
<!-- /wp:embed -->

<!-- wp:paragraph -->
<p>Arguably the single most important piece of documentation for
 any open source project is the README. A good README not only informs 
people what the project does but also who is it for, how they can 
install and use it and how they can contribute to it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you write a bad README without sufficient explanation of what your
 project does or how people can use it then it pretty much defeats the 
purpose of being open source as other developers are less likely to 
engage with or contribute towards it.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>TL;DR - Too long? Skip to the end and use my <a href="https://dev.to/scottydocs/how-to-write-a-kickass-readme-5af9?utm_source=digest_mailer&amp;utm_medium=email&amp;utm_campaign=digest_email#template">template</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>
  
  What is a README?
</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Essentially a README is a single text (<code>.txt</code> or <code>.md</code>)
 file that acts as the one-stop shop documentation for a project or 
directory. It is usually the most visible piece of documentation and 
landing page for most open source projects. Even a README file's name in
 all-caps will catch your readers attention and ensure it is the first 
thing they read.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>There's evidence that READMEs date back as far as the 1970s. The oldest example I could find was <a href="http://pdp-10.trailing-edge.com/decus_20tap3_198111/01/decus/20-0079/readme.txt.html">this README</a>
 for DEC's PDP-10 computer which is dated 27th November 1974. Although 
the origin of the name README is disputed, the two most popular theories
 are:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>Programmers of the original mainframe computers which came with 
punch cards, would leave a stack paper of instructions with “READ ME!” 
written across the front.</li><li>The name is a nod to Lewis Carroll's Alice in Wonderland in which
 the main character Alice finds a bottle of potion labelled “DRINK ME” 
and cake labelled "EAT ME" which make her change in size.</li></ol>
<!-- /wp:list -->

<!-- wp:heading -->
<h2>
  
  What should you include in a README?
</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Ok, so what should an awesome README file contain? As a starting point, I would recommend you include the following key things:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>1. Name the thing</strong><br>
Don't forget to give your project or feature a name. There are a surprising number of projects on GitHub that don't have a name.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>2. An introduction or summary</strong><br>
Write a short two or three line introduction explaining what your 
project does and who it is for. Also leave out headings like 
'Introduction', 'Summary' or 'Overview' - it's obvious this is an 
introduction.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>3. Prerequisites</strong> <br>
Immediately after your introduction add a section titled listing any 
prerequisite knowledge or tools anyone who wants to use the project 
might need before they begin. For example, if it runs on the latest 
version of Python, tell them to install Python. Here's an example:<br>
</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>Prerequisites

Before you continue, ensure you meet the following requirements:

* You have installed the latest version of Ruby.
* You are using a Linux or Mac OS machine. Windows is not currently supported.
* You have a basic understanding of graph theory.
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>4. How to install the thing</strong><br>
Provide installation steps! It's amazing how many projects I've come 
across that only provide basic usage instructions and expect you to 
magically know how to install it. Make sure to break the installation 
down into numbered steps if it requires multiple steps. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>5. How to use the thing</strong><br>
Add steps for how to use the project once the user has installed it. 
Make sure to include usage examples and a reference explaining command 
options or flags if you think they will be helpful. If you have more 
advanced documentation in a separate file or site, link to this from 
here.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>6. How to contribute to the thing</strong><br>
You might want to create a contributor's guide in a separate file but 
definitely link to this from your README if you want people to read it 
before contributing pull requests to your project.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>7. Add contributors</strong><br>
Credit any contributors who have helped with the project in an author 
section. It's a nice way to make open source feel like a team effort and
 acknowledges everyone who has taking the time to contribute. </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>8. Add acknowledgements</strong><br>
Similarly, if you have used anyone else's work (code, designs, images 
etc) that has a copyright that requires acknowledgement, you might want 
to add that here. You can also acknowledge any other developers or 
institutions who helped with the project.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>9. Contact information</strong><br>
You might not want to do this is you're an extremely private person but 
if someone has questions, wants to collaborate with you or is impressed 
enough with your project to offer you a job opportunity, it makes sense 
to have your contact details front and centre.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>10. Add licence information</strong><br>
You definitely want to include licence information if applicable. 
Startups and other companies who rely on third-party software are 
unlikely to be able to use your project unless you provide this. See <a href="https://opensource.org/licenses">opensource.org</a> for a list of licences you may be able to use.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>
  
  Add flare to your README 🔥
</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you really want to make your README stand out and look visually appealing you can do things like:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Add a logo</strong>: If your project has a logo, add this
 at the top of your README. Branding makes a project looks more 
professional and helps people remember it.</li><li><strong>Add badges or shields</strong>: You can add badges and 
shields to reflect the current status of the project, the licence it 
uses and if any dependencies it uses are up-to-date. Plus they look 
pretty cool! You can find a list of badges or design your own at <a href="https://shields.io/">Shields.io</a>.</li><li><strong>Add screenshots</strong>: Sometimes a simple screenshot 
or set of screenshots can say far more than a thousand words. Be warned 
though, if you do use screenshots you will need to update them each time
 you update your project.</li><li><strong>Use emojis?</strong>: A lot of projects seem to use 
emojis these days, although it’s up to you whether you want to use them.
 They can be a good way to inject a bit colour and humour into your 
README and makes the project feel a bit more human. </li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>If you're using <a href="https://allcontributors.org/">All Contributors</a> to acknowledge contributions, you could use their <a href="https://allcontributors.org/docs/en/emoji-key">emoji key</a> to denote different contributions types:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>* 🐛 for raising a bug
* 💻 for submitting code
* 📖 for docs contributions etc.
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>This is what GitHub badges or shields look like for reference (No doubt you've seen them before!):</p>
<!-- /wp:paragraph -->

<!-- wp:image {"linkDestination":"custom"} -->
<figure class="wp-block-image"><a href="https://res.cloudinary.com/practicaldev/image/fetch/s--TAmjuIuv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/de766ouyuouxmjs2yvcm.png"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--TAmjuIuv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/de766ouyuouxmjs2yvcm.png" alt="Shields.io badges"/></a></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2>
  
  My template 
</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>I've created a template that covers most of the recommendations made 
in this post. Feel free to fork the repository, make suggestions to 
improve it or customize it for your own purposes! You can find my 
template on GitHub <a href="https://github.com/scottydocs/README-template.md">here</a>.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>
  
  Resources
</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>If you want more advice on READMEs, I'd also recommend these resources:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Daniel Beck's talk <a href="https://www.youtube.com/watch?v=2dAK42B7qtw">'Write the Readable'</a> from Write the Docs in 2016.</li><li>Lorna Jane Mitchell's talk <a href="https://youtu.be/fXMN4X9B8Rg">'Github as a landing page'</a> from API the Docs 2019.</li><li>Check out Franck Abgrall's <a href="https://github.com/kefranabg/readme-md-generator">README generator</a>.</li></ul>
<!-- /wp:list -->