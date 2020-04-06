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
    bucketSlug: '', /* Find this in Your Bucket > Settings > Basic Settings after logging in at https://app.cosmicjs.com/login */
    objectTypes: ['posts', 'settings'], /* Object types to fetch */
    apiAccess: {
      read_key: '', /* Find this in Your Bucket > Settings > API Access after logging in at https://app.cosmicjs.com/login */
    },
    localMedia: true /* Optional. If you want to enable local image for Gatsby Image */
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
You can deploy to Netlify in a few steps using their CLI. Run the following commands from the root folder.
```
npm i -g netlify-cli
netlify deploy
```
