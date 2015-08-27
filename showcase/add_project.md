---
title: Adding a Project
layout: default
---

## Fall 2015 Season

If you have completed a project during the Fall 2015 Hackathon Season,
then you are eligible to be featured on our site. All you have to do is
open a pull request to the [repository](https://github.com/mpoegel/RHO_ClubSite)
on GitHub adding a file for your project in the `/_posts/2015` directory.
The file should be Markdown in the following format:

<pre>
---
layout: project
category: project

title: [project title]
authors: [authors]
hackathon: [name of hackathon]
repo_url: [url of the repository]
img_url: [url of an image of your project]
description: [<350 character description]
awards: [if none, leave out]
---

[full description of project (optional)]

</pre>

The file name should be `YYYY-MM-DD-project-title.md`. Your pull request
will be reviewed by an executive board member. If you would like to make
any other contributions to our club web site, feel free to do so in a
separate pull request.
