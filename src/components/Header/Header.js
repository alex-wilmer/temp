import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

let Header = ({
  username,
  numCartItems,
  activeRequests,
  collapse,
  showMyProjects,
  currentUser,
  $state = ``,
  addedLanguages,
}) =>
  <header
    id="header"
    className="navbar navbar-default navbar-static-top"
    role="banner"
  >
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-ng-click="hc.toggleCollapsed()"
        >
          <span className="sr-only" data-translate>Toggle navigation</span>
          { _.range(0, 3).map((x, i) =>
            <span key={ i } className="icon-bar"></span>)
          }
        </button>

        <a
          id="gdc-logo"
          className="navbar-brand"
          data-ui-sref="home"
          tabIndex="0"
          data-translate
        >
          GDC Data Portal
        </a>
      </div>

      <nav
        className="navbar-collapse collapse navbar-responsive-collapse"
        data-uib-collapse="hc.isCollapsed"
        role="navigation"
        onClick={ event => collapse(event) }
        tabIndex="-1"
        data-ng-keypress="hc.collapse($event)"
        aria-label="{{ 'Site Navigation' | translate }}"
      >
        <ul className="nav navbar-nav">
          <li
            id="header-projects"
            className={ $state.includes(`projects`) ? `active` : `` }
          >
            <a ui-sref="projects.table" tabIndex="0">
              <i className="fa fa-folder-o" />
              <span className="hidden-sm" data-translate>Projects</span>
            </a>
          </li>
          <li
            className={ $state.includes(`search`) || $state.includes(`query`) ? `active` : `` }
            id="header-data"
          >
            <a ui-sref="search.summary" tabIndex="0">
              <i className="fa fa-database"></i>
              <span className="hidden-sm" data-translate>Data</span>
            </a>
          </li>
          <li ui-sref-active="active" id="header-annotations">
            <a ui-sref="annotations" tabIndex="0">
              <i className="fa fa-align-left"></i>
              <span className="hidden-sm" data-translate>Annotations</span>
            </a>
          </li>
          <li ui-sref-active="active" id="header-reports">
            <a ui-sref="reports" tabIndex="0">
              <i className="fa fa-cube"></i>
              <span className="hidden-sm" data-translate>Reports</span>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          { addedLanguages &&
            <li>
              <select
                ng-model="hc.currentLang"
                ng-change="hc.setLanguage()"
                aria-label="Select language"
                ng-options="k as v for (k, v) in hc.languages"
              >
              </select>
            </li>
          }
          <li data-ng-if2="hc.shouldShowOption('quick-search')">
            <a quick-search tabIndex="0">
              <i className="fa fa-search stock-icon"></i>
              <span className="hidden-md hidden-sm" data-translate>Quick Search</span>
            </a>
          </li>
          <li data-ng-if="!hc.UserService.currentUser" id="header-login">
            <a login-button tabIndex="0">
              <i className="fa fa-sign-in"></i>
              <span className="hidden-md hidden-sm" data-translate>Login</span>
            </a>
          </li>
          { showMyProjects &&
            <li className="MyProjects">
              <label className="MyProjects__label navbar-text">
                <input
                  type="checkbox"
                  data-ng-change="hc.UserService.toggleFilter()"
                  data-ng-model="hc.UserService.currentUser.isFiltered"
                />
                <span data-translate>Only My Projects</span>
              </label>
            </li>
          }
          { !!currentUser &&
            <li className="hidden-xs">
              <ul className="nav navbar-nav">
                <li className="btn-group" data-uib-dropdown>
                  <a
                    className="dropdown-toggle"
                    data-uib-dropdown-toggle
                    aria-expanded="false"
                  >
                    { username } <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li id="header-token">
                      <a data-ng-click="hc.getToken()">
                        <i className="fa fa-file-zip-o stock-icon"></i>
                        <span data-translate>Download Token</span>
                      </a>
                    </li>
                    <li id="header-logout">
                      <a logout-button data-redirect="logout">
                        <i className="fa fa-sign-out stock-icon"></i>
                        <span data-translate>Logout</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          }
          <li
            id="header-token"
            data-ng-if="hc.UserService.currentUser"
            className="visible-xs"
          >
            <a data-ng-click="hc.getToken()">
              <i className="fa fa-file-zip-o stock-icon"></i>
              <span data-translate>Download Token</span>
            </a>
          </li>

          <li
            id="header-logout"
            data-ng-if="hc.UserService.currentUser"
            className="visible-xs"
          >
            <a logout-button data-redirect="logout">
              <i className="fa fa-sign-out stock-icon" />
              <span data-translate>Logout</span>
            </a>
          </li>

          <li ui-sref-active="active" className="nav-cart">
            <a ui-sref="cart" tabIndex="0">
              <i className="fa fa-shopping-cart" />
              <span className="hidden-md hidden-sm" data-translate>Cart</span>
              <span className="label label-primary">{ numCartItems }</span>
            </a>
          </li>

          <li data-uib-dropdown>
            <a
              data-uib-dropdown-toggle
              className="dropdown-toggle"
              aria-expanded="false"
              tabIndex="0"
            >
              <i className="icon-gdc-apps-menu"></i>
              <span className="hidden-md hidden-sm" data-translate>GDC Apps</span>
            </a>

            <div
              data-uib-dropdown-menu
              className="dropdown-menu gdc-apps-menu-container"
              role="menu"
            >
              <table className="gdc-apps-menu-grid">
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="#"
                        title="Data Portal"
                        className="active"
                      >
                        <span className="icon icon-gdc-data-portal">
                          { _.range(0, 14).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Data Portal</p>
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://gdc.nci.nih.gov/access-data/gdc-data-transfer-tool"
                        title="GDC Data Transfer Tool"
                        target="_blank"
                      >
                        <span className="icon icon-gdc-data-transer-tool">
                          { _.range(0, 8).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Data Transfer Tool</p>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="https://gdc.nci.nih.gov/developers/gdc-application-programming-interface-api"
                        title="GDC API"
                        target="_blank"
                      >
                        <span className="icon icon-gdc-portal-api">
                          { _.range(0, 10).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>API</p>
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://gdc-portal.nci.nih.gov/submission/"
                        title="GDC Submission Portal"
                        target="_blank"
                      >
                        <span className="icon icon-gdc-submission-portal">
                          { _.range(0, 10).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Data Submission Portal</p>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="https://gdc-docs-dev.nci.nih.gov/"
                        title="GDC Docs"
                        target="_blank"
                      >
                        <span className="icon icon-gdc-docs">
                          { _.range(0, 14).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Documentation</p>
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://gdc.nci.nih.gov/"
                        title="GDC Website"
                        target="_blank"
                      >
                        <span className="icon icon-gdc-website">
                          { _.range(0, 8).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Website</p>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="https://gdc-portal.nci.nih.gov/legacy-archive"
                        title="GDC Legacy Archive"
                        target="_blank"
                      >
                        <span className="icon icon-gdc-legacy-archive">
                          { _.range(0, 10).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Legacy Archive</p>
                      </a>
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </nav>
    </div>

    { activeRequests &&
      <div className="xhrCounter">{ `${activeRequests}%` }</div>
    }
  </header>

export default connect()(Header)
