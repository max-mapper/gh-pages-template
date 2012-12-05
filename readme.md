# gh-pages template

### Use Github to host web sites without having to download an app or use the command line

this repo is just a simple set of instructions on how to use the free github http://pages.github.com functionality to host static websites. an example of a github hosted static site is my own [personal internet web blog](http://maxogden.com)

## What it is

- static file host
- entirely managed from the github.com web UI
- free
- able to use custom domains (so that yourdomain.com points to your files on github)
- very simple

## What it isn't

a dynamic host -- so it can't do PHP/Rails/Node etc. The only way to do dynamic content is by setting up a [jekyll blog](https://help.github.com/articles/using-jekyll-with-pages) (more advanced)

## How to set up a site

this repo is setup to only have the special **gh-pages** branch that github requires to use static file hosting. when you create and view repos on github they usually show you the default `master` branch which doesn't work with static file hosting

1. login to github and fork this repo [github.com/maxogden/gh-pages-template](https://github.com/maxogden/gh-pages-template)
2. now you can go to **yourusername.github.com/gh-pages-template** and you should see the hello world page! it might take a few minutes for github to generate
3. using the github web UI you can [create new files](https://github.com/blog/1327-creating-files-on-github) or [edit existing files](https://github.com/blog/143-inline-file-editing)
4. the admin button at the top of the repo page will let you rename the repository
5. to point a custom domain at github edit the file called `CNAME` and make sure its contents are only `whateveryourdomainis.com` then go to your domain control panel and make sure the `A` record points to `204.232.175.78`. For more detailed instructions see [this article](https://help.github.com/articles/setting-up-a-custom-domain-with-pages)

thats it!

## License

The content in this repo is BSD licensed