# gh-pages template

### Use Github to host web sites without having to download an app or use the command line

this repository is just a simple set of instructions on how to use the free github http://pages.github.com functionality to host static websites. an example of a github hosted static site is my own [personal internet web blog](http://maxogden.com) as well as [realtimecats.com](http://realtimecats.com).

## Why

Traditionally git has been for computer programmers, but recently github added some new features to their website which make it possible for non-technical people to set up repos on github! All the things mentioned here can be done with just a web browser. 

## What it is

- static file host
- entirely managed from the github.com web UI
- free
- able to use custom domains (so that yourdomain.com points to your files on github)
- very simple

## What it isn't

a dynamic host -- so it can't do PHP/Rails/Node etc. The only ways to do dynamic content are JavaScript with an externally hosted backend (e.g. [Parse](http://parse.com/)) or set up a [jekyll blog](https://help.github.com/articles/using-jekyll-with-pages). The easiest way to do this is with [Jekyll Bootstrap](http://jekyllbootstrap.com/) - this is not really dynamic, it just generates static HTML from Markdown, but appears like a more dynamic blog.


## How to set up a site

this repo is setup to only have the special **gh-pages** branch that github requires to use static file hosting. when you create and view repos on github they usually show you the default `master` branch which doesn't work with static file hosting

1. login to github and fork this repo [github.com/maxogden/gh-pages-template](https://github.com/maxogden/gh-pages-template)
2. you will need to edit a file in your forked repo so that github knows to deploy your static site! try going to index.html and clicking the edit button, making a small change, and then commiting your change
3. now you can go to **yourusername.github.com/gh-pages-template** and you should see the hello world page! it might take a few minutes for github to generate
4. using the github web UI you can [create new files](https://github.com/blog/1327-creating-files-on-github) or [edit existing files](https://github.com/blog/143-inline-file-editing)
5. the admin button at the top of the repo page will let you rename the repository
6. to point a custom domain at github edit the file called `CNAME` and make sure its contents are only `whateveryourdomainis.com` and then proceed to [set up your DNS](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages)

thats it!

## License

The content in this repo is BSD licensed
