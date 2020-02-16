# Gatsby + Cosmic JS

![gatsby-blog-cosmicjs](https://cdn.cosmicjs.com/fe5196f0-42c2-11ea-8d10-df553329919a-gatsby-blog-cosmic.png "The index page of the starter blog")

> This repo contains an example blog website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Cosmic JS](https://www.cosmicjs.com).

> [See live demo hosted on Netlify](https://gatsby-blog-cosmicjs.netlify.com/)

> Uses the [Cosmic JS Gatsby Source Plugin](https://www.npmjs.com/package/gatsby-source-cosmicjs)

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Install

``` bash
# Make sure that you have the Gatsby CLI program installed
npm install --global gatsby-cli

# run from your CLI
gatsby new gatsby-example-blog https://github.com/cosmicjs/gatsby-blog-cosmicjs
```
In `gatsby-config.js` you need to add configuration for your Cosmic JS Bucket

``` javascript
{
  resolve: 'gatsby-source-cosmicjs',
  options: {
    bucketSlug: '', /* bucket slug */
    objectTypes: ['posts', 'settings'], /* object slugs you want to populate */
    apiAccess: {
      read_key: '', /* optional */
    }
  }
},
```

Then

``` bash
# Then you can run it by
cd gatsby-example-blog
npm run develop
```

## Deploy to Netlify
You can deploy to Netlify in a few steps using thier CLI. Run the following commands from the root folder.
```
npm i -g netlify-cli
netlify deploy
```
