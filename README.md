# lightastic.github.io

Lighttastic's website: pure Holiday lighting delight!

## Dev

For websitethe Jekyll theme development, do the following:

* Make sure all nodejs dependencies are installed. Run `npm i` in the dir root.
* Also make sure the bundler dependencies are installed. Run `bundle install` in the dir root as well.
* If you modify the css in amy of the files, it needs to be regenerated: `npm run {dev|build}` (output is identical, but `build` will generate minified css)
* `bundle exec jekyll serve` will serve the site and watch for changes. Very useful when developing the site.
* Pass the `--livereload` option to serve to automatically refresh the page with each change you make to the source files: `bundle exec jekyll serve --livereload`.

## Dependencies

This site depends on 2 main components:

* [TailwindCSS](https://tailwindcss.com): The version is controlled by the `package.json` file.
* [GitHub Pages](https://docs.github.com/en/pages): These are specified in the `Gemfile` file. These pages are quite useful: [Creating a GitHub Pages site with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll) and [Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll). The latest GitHub Pages dependencies can be found [here](https://pages.github.com/versions/).
