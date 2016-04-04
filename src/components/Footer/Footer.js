import React from 'react'

let Footer = ({
  config,
}) =>
  <footer id="footer">
    <div className="container" role="contentinfo">
      <div>
        <a href="/">Site Home</a>
        <span> | </span>
        <a href="http://www.cancer.gov/global/web/policies">Policies</a>
        <span> | </span>
        <a href="http://www.cancer.gov/global/web/policies/accessibility">Accessibility</a>
        <span> | </span>
        <a href="http://www.cancer.gov/global/web/policies/foia">FOIA</a>
      </div>
      <div>
        <a href="http://www.hhs.gov">U.S. Department of Health and Human Services</a>
        <span> | </span>
        <a href="http://www.nih.gov">National Institutes of Health</a>
        <span> | </span>
        <a href="http://www.cancer.gov">National Cancer Institute</a>
        <span> | </span>
        <a href="http://www.usa.gov">USA.gov</a>
      </div>
      <div>
        NIH... Turning Discovery Into Health &#174;
      </div>
      <div>
        <span> UI </span>
        <a href={ config.tag }>{ config.version }</a>
        <span> @ </span>
        <a href={ config.commitLink }>{ config.commitHash }</a>
        <span>, API </span>
        <a href={ config.apiTag }>{ config.apiVersion }</a>

        { config.apiCommitHash &&
          <span>
            <span> @ </span>
            <a href={ config.apiCommitLink }>{ config.apiCommitHash.slice(0, 7) }</a>
          </span>
        }
      </div>
    </div>
  </footer>

export default Footer
