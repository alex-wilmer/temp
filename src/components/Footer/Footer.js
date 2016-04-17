import React from 'react'

let Footer = ({
  config,
}) =>
  <footer className={styles.footer}>
    <div className={styles.outerContainer} role="contentinfo">
      <div className={styles.innerContainer}>
        <a href="/" className={styles.link}>Site Home</a>
        <span> | </span>
        <a href="http://www.cancer.gov/global/web/policies" className={styles.link}>Policies</a>
        <span> | </span>
        <a href="http://www.cancer.gov/global/web/policies/accessibility" className={styles.link}>Accessibility</a>
        <span> | </span>
        <a href="http://www.cancer.gov/global/web/policies/foia" className={styles.link}>FOIA</a>
      </div>
      <div>
        <a href="http://www.hhs.gov" className={styles.link}>U.S. Department of Health and Human Services</a>
        <span> | </span>
        <a href="http://www.nih.gov" className={styles.link}>National Institutes of Health</a>
        <span> | </span>
        <a href="http://www.cancer.gov" className={styles.link}>National Cancer Institute</a>
        <span> | </span>
        <a href="http://www.usa.gov" className={styles.link}>USA.gov</a>
      </div>
      <div>
        NIH... Turning Discovery Into Health &#174;
      </div>
      <div>
        <span> UI </span>
        <a href={config.tag} className={styles.link}>{config.version}</a>
        <span> @ </span>
        <a href={config.commitLink} className={styles.link}>{config.commitHash}</a>
        <span>, API </span>
        <a href={config.apiTag} className={styles.link}>{config.apiVersion}</a>

        {
          config.apiCommitHash &&
            <span>
              <span> @ </span>
              <a href={config.apiCommitLink} className={styles.link}>
                {config.apiCommitHash.slice(0, 7)}
              </a>
            </span>
        }
      </div>
    </div>
  </footer>

import { StyleSheet } from 'react-look'
import theme from 'theme'
import Color from 'color'

const styles = StyleSheet.create({
  footer: {
    position: `absolute`,
    bottom: 0,
    left: 0,
    width: `100%`,
    zIndex: 100,
    height: `auto`,
    backgroundColor: theme.greyScale1,
    borderTop: `6px solid ${Color(theme.greyScale1).lighten(2).rgbString()}`,
    borderBottom: `none`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  outerContainer: {
    fontSize: `85.714%`,
    padding: `15px 0`,
    color: `#97abb6`,
    textAlign: `center`,
  },
  innercontainer: {
    margin: `5px auto 0`,
    textAlign: `center`,
  },
  link: {
    color: `#c2cfd5`,
    ':hover': {
      color: `#c2cfd5`,
    },
  },
})

export default Footer
