# `gh-pages` template

### Use Github to host websites without having to download any apps or use the command line

This repository is just a simple set of instructions on how to use the free [GitHub Pages](http://pages.github.com) functionality to host static websites. An example of a GitHub hosted static site is my own [personal internet web blog](http://maxogden.com) as well as [realtimecats.com](http://realtimecats.com).

## Why?

Traditionally, Git has been used for computer programmers, but recently GitHub added some new features to their website which made it possible for non-technical people to set up repositories on GitHub! Everything mentioned here can be done in a web browser!

## What is Github Pages?

- Static file host
- Entirely managed from the github.com web UI
- Free, yes 100% free
- Able to use custom domains (so that yourdomain.com points to your files on GitHub)
- Very simple

## What it isn't

A dynamic host - it can't run PHP, Rails or Node JS etc. The only ways to use dynamic content is in JavaScript with an externally hosted backend (for example [Parse](http://parse.com/)) or by setting up a [jekyll blog](https://help.github.com/articles/using-jekyll-with-pages). The easiest way to do this is with [Jekyll Bootstrap](http://jekyllbootstrap.com/) - and yes, this isn't really dynamic - it just generates static HTML from Markdown, but looks like a dynamic blog.

## How to set up a site

This repository has been set up to only have the special `gh-pages` branch that GitHub requires to use static file hosting. When you create and view repositories on GitHub they usually show you the default `master` branch which doesn't work at all with static file hosting

## How to use

1. Login to GitHub and fork this [repo](https://github.com/maxogden/gh-pages-template).
2. You will need to edit a file in your forked repo so that GitHub knows to deploy your static site! Try opening the `index.html` file and clicking the *edit* button, making a small change (such as adding a newline), and then committing it.
3. Now you can navigate to **yourusername.github.com/gh-pages-template** and you should see the hello world page! If it doesn't load or you get a `404` error, try again in a moment as it might take a few minutes for GitHub to generate it.
4. Using the GitHub website, you can [create new files](https://github.com/blog/1327-creating-files-on-github) or [edit existing files](https://github.com/blog/143-inline-file-editing).
5. The *settings* button at the top of the repository page will let you rename it.
6. To point a custom domain at GitHub, edit the file called `CNAME` and make sure its contents are only `whateveryourdomainis.com` (without a newline) and then proceed to [set up your DNS](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages)

That's it! Enjoy your new website!

## License

The content in this repo is [BSD licensed](https://opensource.org/licenses/BSD-3-Clause)
