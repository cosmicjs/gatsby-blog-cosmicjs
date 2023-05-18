import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import cosmicjsLogo from '../../static/cosmicjs.svg'
import gatsbyLogo from '../../static/gatsby.png'
import { rhythm, scale } from '../utils/typography'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

export default ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        cosmicjsSettings(slug: { eq: "general" }) {
          metadata {
            site_heading
            homepage_hero {
              local {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const siteTitle = data.cosmicjsSettings.metadata.site_heading
      const homgePageHero =
        data.cosmicjsSettings.metadata.homepage_hero.local.childImageSharp.fluid
      let header

      let rootPath = `/`
      let postsPath = `/posts`
      if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
        rootPath = __PATH_PREFIX__ + `/`
        postsPath = __PATH_PREFIX__ + `/posts`
      }

      if (location.pathname === rootPath || location.pathname === postsPath) {
        header = (
          <BackgroundImage
            Tag="div"
            className="post-hero"
            fluid={homgePageHero}
            backgroundColor={`#007ACC`}
            style={{
              height: rhythm(14),
              position: 'relative',
              marginBottom: `${rhythm(1.5)}`,
            }}
          >
            <h1
              style={{
                fontSize: '2rem',
                position: 'absolute',
                textAlign: 'center',
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '70px',
                left: 0,
                right: 0,
                top: rhythm(4),
                margin: 'auto',
                maxWidth: '420px',
                height: '5rem',
                lineHeight: '5rem',
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                  backgroundImage: 'linear-gradient( 90deg, #ff006e, #8338ec, #3a86ff )',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                to={'/'}
              >
                {siteTitle}
              </Link>
            </h1>
          </BackgroundImage>
        )
      } else {
        header = (
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: 0,
              marginBottom: rhythm(-1),
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              paddingTop: `${rhythm(1.5)}`,
              backgroundImage: 'linear-gradient( 90deg, #ff006e, #8338ec, #3a86ff )',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              {siteTitle}
            </Link>
          </h3>
        )
      }
      return (
        <div>
          {header}
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
              minHeight: 'calc(100vh - 42px)',
              marginTop: '2rem',
              background: '#c8d0e7',
            }}
          >
            {children}
          </div>
          <footer
            style={{
              textAlign: 'center',
              padding: `0 20px 80px 0`,
            }}
          >
            © Copyright 2023 Sagar Kumar Shrivastava&nbsp;
            <br></br>
            <a
              target="_blank"
              href="https://twitter.com/sinhasagar01"
              style={{
                color: '#007acc',
                boxShadow: 'none',
                backgroundImage: 'linear-gradient( 90deg, #ff006e, #8338ec, #3a86ff )',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <strong>Twitter</strong>
            </a>
             &nbsp;|&nbsp;
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sagarsinha1/"
              style={{
                color: '#007acc',
                boxShadow: 'none',
                backgroundImage: 'linear-gradient( 90deg, #ff006e, #8338ec, #3a86ff )',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <strong>Linkedin</strong>
            </a>
            &nbsp;|&nbsp;
            <a
              target="_blank"
              href="https://github.com/sinhasagar01"
              style={{
                color: '#007acc',
                boxShadow: 'none',
                backgroundImage: 'linear-gradient( 90deg, #ff006e, #8338ec, #3a86ff )',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <strong>GitHub</strong>
            </a>
          </footer>
        </div>
      )
    }}
  />
)
