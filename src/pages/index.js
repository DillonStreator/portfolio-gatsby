import React from "react"
import "../scss/global.scss"
import Typewriter from "typewriter-effect"

import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import SEO from "../components/seo"
import Picture from "../components/picture"

import styles from "../scss/index.module.scss"

import linkedinSvg from "../assets/linkedin.svg"
import npmSvg from "../assets/npm.svg"
import githubSvg from "../assets/github.svg"
import stackoverflowSvg from "../assets/stackoverflow.svg"

import resumePDF from '../assets/resume.pdf'

const socials = [
  {
    href: "https://www.linkedin.com/in/dillon-streator-75b01b83/",
    src: linkedinSvg,
    alt: "linkedin logo",
  },
  {
    href: "https://www.npmjs.com/~dillonstreator",
    src: npmSvg,
    alt: "npm logo",
  },
  {
    href: "https://www.github.com/DillonStreator",
    src: githubSvg,
    alt: "github logo",
  },
  {
    href: "https://stackoverflow.com/users/8765619/dillon",
    src: stackoverflowSvg,
    alt: "stackoverflow logo",
  },
]

const IndexPage = () => (
  <>
    <SEO title="Portfolio" />
    <main>
      <section>
        <div className="container">
          <div className={styles.profileImg}>
            <Picture />
            <div className={styles.overlay} />
          </div>
          <h2 className={styles.name}>Dillon Streator</h2>
          <h3 className={styles.title}>Full Stack Developer</h3>
          <div className={styles.terminal}>
            <Typewriter
              options={{
                strings: [
                  "Simplicity > Complexity",
                  "Secure Succinct Software",
                  "Test Driven Development",
                ],
                autoStart: true,
                loop: true,
                cursorClassName: styles.cursor,
                wrapperClassName: styles.wrapper,
              }}
            />
          </div>
        </div>
      </section>
      <section className={styles.cv}>
        <div className="container">
          <a
            onClick={() => trackCustomEvent({ category: "resume view" })}
            href={resumePDF}
            target="blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
      </section>
    </main>
    <footer>
      <div className={styles.social}>
        {socials.map(({ href, src, alt }) => (
          <a
            onClick={() =>
              trackCustomEvent({ category: "social view", action: href })
            }
            key={href}
            href={href}
            target="blank"
            rel="noopener noreferrer"
          >
            <img height={40} width={40} src={src} alt={alt} />
          </a>
        ))}
      </div>
    </footer>
  </>
)

export default IndexPage
