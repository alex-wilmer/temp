import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

let Home = ({
  query = {},
}) =>
  <div className="home-container">
    <div className="showcase-container row-layout col-md-12 row">
      <div className="col-lg-6 col-md-7 quick-search-component component">
        <h3>Harmonized Cancer Datasets</h3>
        <h1>Genomic Data Commons Data Portal</h1>
        <div className="quick-search-container">
          <em>Get Started by Exploring:</em>
          <div className="search-button-container row">
            <div className="col-md-6">
              <a
                ui-sref="projects.table"
                tabIndex="0"
                className="btn btn-primary btn-lg btn-projects"
              >
                <i className="icon-gdc-projects" />
                <span data-translate>Projects</span>
              </a>
            </div>
            <div className="col-md-6">
              <a
                ui-sref="search.summary"
                tabIndex="0"
                className="btn btn-primary btn-lg btn-data"
              >
                <i className="icon-gdc-data" />
                <span data-translate>Data</span>
              </a>
            </div>
          </div>
        </div>
        <div className="query-list-container">
          <em>Perform Advanced Search Queries, such as:</em>
          <table className="query-list-table" role="presentation">
            <tbody>
              <tr data-ng-repeat="query in hc.getExampleSearchQueries()">
                <td>
                  <ul>
                    <li data-ng-bind="query.description">
                    </li>
                  </ul>
                </td>
                <td>
                  <a className="btn btn-primary" href="/search/c?filters={{query.filters}}">
                    { query.caseCount >= 0 &&
                      <span data-ng-bind="query.caseCount | number"></span>
                    }
                    { query.caseCount === null &&
                      <span>
                        <i className="fa fa-spinner fa-spin" />
                      </span>
                    }
                    <span>Cases</span>
                  </a>
                </td>
                <td>
                  <a className="btn btn-primary" href="/search/f?filters={{query.filters}}">
                    { query.fileCount >= 0 &&
                      <span data-ng-bind="query.fileCount | number"></span>
                    }
                    { query.fileCount === null &&
                      <span>
                        <i className="fa fa-spinner fa-spin" />
                      </span>
                    }
                    <span>Files</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-lg-6 col-md-5 browser-vis component">
        <div className="filter-container">
          <div className="filter-bubble">
            <a ui-sref="projects.table" title="Go to the GDC Projects Page">
              Cases by Primary Site
            </a>
            <div className="arrow"></div>
          </div>
        </div>
        <marked-bar-chart
          data-ng-show="hc.getChartFilteredData()"
          data-data="hc.getChartFilteredData()"
          data-title-old="# of Cases by Primary Site"
          data-tool-tip-fn="hc.getChartTooltipFunction()"
          data-marked-legend-label2="Recently Updated"
          data-height="397"
          data-margin="barChartMargins"
        />
      </div>
    </div>

    <div className="data-display-container row-layout row">
      <div className="component col-md-12 col-lg-12">
        <h2>Data Portal Summary</h2>

        <em>Latest Release <span data-ng-bind-placholder="">#0</span> -
          <span data-ng-bind-placholder="" style={ { marginRight: `1rem` } }>May 2, 2016</span>
        </em>
        <div className="data-stats-list-container col-md-12">
          <div
            data-ng-if="stat.value > 0"
            className="data-stats-block"
            data-ng-repeat="stat in hc.getProjectStatsList()"
          >
            <div className="stats-block-header" data-ng-bind="stat.title"></div>
            <div className="stats-block-body">
              <i data-ng-if="stat.icon !== 'cancer_type_hardcode'" className="{{stat.icon}}"></i>
              <span
                data-ng-if="stat.icon === 'cancer_type_hardcode'"
                className="icon-gdc-cancer-types project-icon"
              >
                <span className="path1" />
                <span className="path2" />
                <span className="path3" style={ { color: `#fff` } } />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
              </span>
              <a href="{{stat.url}}" data-ng-bind="stat.value|number"></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="table-row-container row-layout row">
      <div className="table-container component col-md-12">
        <div className="info-table col-lg-4 col-md-6 col-sm-12 gdc-infras">
          <div className="panel panel-default">
            <div className="panel-heading clearfix">
              <h3 className="panel-title table-heading">Infrastructure</h3>
              <p>
                <em>
                  Data is continuously being processed and harmonized by the GDC.<br />
                  System stats:
                </em>
              </p>
            </div>
            <table className="table-responsive table table-striped table-hover table-condensed">
              <tbody>
                <tr data-ng-repeat-placeholder>
                  <th>Storage Infrastructure</th>
                  <td>
                    <span
                      data-ng-if="! hc.getProjectStats().summaryData"
                    >
                      <i className="fa fa-spinner fa-spin" />
                    </span>
                    <span data-ng-if="hc.getProjectStats().summaryData">
                      <span data-ng-bind="hc.getProjectStats().summaryData.fs.value | size" />
                      used
                    </span>
                  </td>
                  <td>
                    <span
                      data-ng-bind="
                        (9150000000000000 - hc.getProjectStats().summaryData.fs.value) | size
                      "
                    />
                    available
                  </td>
                </tr>
                <tr>
                  <th>Compute Infrastructure</th>
                  <td>13,120 Cores</td>
                  <td>81,920 GB RAM</td>
                </tr>
                <tr>
                  <th>Internet Facing Bandwidth</th>
                  <td>1.2 Gbps in</td>
                  <td>18.2 Mbps out</td>
                </tr>
                <tr>
                  <th>Unique Visitors</th>
                  <td>20 daily</td>
                  <td>1500 Total</td>
                </tr>
                <tr>
                  <th>Downloads to Date</th>
                  <td>
                    <span
                      data-ng-if="hc.getProjectStats().downloads.totalDownloads === null"
                    >
                      <i className="fa fa-spinner fa-spin" />
                    </span>
                    <span
                      data-ng-if="hc.getProjectStats().downloads.totalDownloads >= 0"
                      data-ng-bind="hc.getProjectStats().downloads.totalDownloads | number"
                    />
                  </td>
                  <td>
                    <span
                      data-ng-if="hc.getProjectStats().downloads.totalDownloadSizeBytes === null"
                    >
                      <i className="fa fa-spinner fa-spin" />
                    </span>
                    <span
                      data-ng-if="hc.getProjectStats().downloads.totalDownloadSizeBytes >= 0"
                      data-ng-bind="hc.getProjectStats().downloads.totalDownloadSizeBytes | size"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="info-table col-lg-4 col-md-6 col-sm-12 gdc-docs">
          <div className="panel panel-default">
            <div className="panel-heading clearfix">
              <h3 className="panel-title table-heading">Documentation</h3>
              <p>
                <em>
                  Learn how to use the GDC Data Portal to its full potential with common
                  topics such as:
                </em>
              </p>
            </div>
            <table className="table-responsive table table-striped table-hover table-condensed">
              <tbody>
                <tr>
                  <td>
                    <a href="https://gdc-docs.nci.nih.gov/Data_Portal/Users_Guide/Advanced_Search/" target="_blank">Searching Data with Facets and Smart Search Technology</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://gdc-docs.nci.nih.gov/Data_Portal/Users_Guide/Cart/" target="_blank">Downloading files with the Personalized Cart</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://gdc-docs.nci.nih.gov/" target="_blank">Data Portal Troubleshooting Tips</a>

                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://gdc-docs.nci.nih.gov/Commons/About_the_Data/#controlled-access-data" target="_blank">Controlled Access Data</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://gdc-docs-dev.nci.nih.gov/" target="_blank"><strong>Visit the Documentation Website <i className="fa fa-angle-double-right"></i></strong> </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="info-table col-lg-4 col-md-12 col-sm-12 gdc-apps">
          <div className="panel panel-default">
            <div className="panel-heading clearfix">
              <h3 className="panel-title table-heading">GDC Applications</h3>
              <p>
                <em>
                  The GDC Data Portal is a robust data-driven platform that allows
                  cancer researchers and bioinformaticians to search and download
                  cancer data for analysis. The GDC applications include:
                </em>
              </p>
            </div>
            <table className="table-responsive table table-striped table-hover table-condensed">
              <tbody>
                <tr>
                  <td>
                    <div data-uib-tooltip="Data Portal">
                      <a href="#" title="Data Portal">
                        <span className="icon icon-gdc-data-portal">
                          { _.range(0, 14).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Data Portal</p>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div data-uib-tooltip="GDC Data Transfer Tool">
                      <a
                        href="https://gdc.nci.nih.gov/access-data/gdc-data-transfer-tool"
                        target="_blank"
                        title="GDC Data Transfer Tool"
                      >
                        <span className="icon icon-gdc-data-transer-tool">
                          { _.range(0, 8).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Data Transfer Tool</p>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div data-uib-tooltip="GDC API">
                      <a
                        href="https://gdc.nci.nih.gov/developers/gdc-application-programming-interface-api" target="_blank"
                        title="GDC API"
                      >
                        <span className="icon icon-gdc-portal-api">
                          { _.range(0, 10).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>API</p>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div data-uib-tooltip="GDC Submission Portal">
                      <a
                        href="https://gdc-portal.nci.nih.gov/submission/"
                        target="_blank"
                        title="GDC Submission Portal"
                      >
                        <span className="icon icon-gdc-submission-portal">
                          { _.range(0, 10).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Data Submission Portal</p>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div data-uib-tooltip="GDC Docs">
                      <a
                        href="https://gdc-docs-dev.nci.nih.gov/"
                        target="_blank"
                        title="GDC Docs"
                      >
                        <span className="icon icon-gdc-docs">
                          { _.range(0, 14).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Documentation</p>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div data-uib-tooltip="GDC Website">
                      <a
                        href="https://gdc.nci.nih.gov/"
                        target="_blank"
                        title="GDC Website"
                      >
                        <span className="icon icon-gdc-website">
                          { _.range(0, 8).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Website</p>
                      </a>
                    </div>
                  </td>
                  <td>
                    <div data-uib-tooltip="GDC Legacy Archive">
                      <a
                        href="https://gdc-portal.nci.nih.gov/legacy-archive"
                        target="_blank"
                        title="GDC Legacy Archive"
                      >
                        <span className="icon icon-gdc-legacy-archive">
                          { _.range(0, 10).map((x, i) =>
                            <span key={ i } className={ `path${i + 1}` } />
                          ) }
                        </span>
                        <p>Legacy Archive</p>
                      </a>
                    </div>
                  </td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

export default connect()(Home)
