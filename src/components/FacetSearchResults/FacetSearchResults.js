import React from 'react'
import { Row, Column } from 'uikit/Flex'
import Card from 'uikit2/Card'

let data = {
  type: `files`,
  results: [],
}

data.results = 20000

let pagination = {
  max: 20,
}

let FacetSearchResults = () =>
  <Card theme='greyScale4'>
    <Column>
      <Row>
        <Column>
          <h2>{data.type}</h2>
          <span>
            Showing <strong>1 - 20</strong> of
            <strong>{data.results.length}</strong> {data.type}
          </span>
        </Column>
      </Row>
      <Row>
        <table>
          <thead>

          </thead>
          <tbody>

          </tbody>
        </table>
      </Row>
      <Row>
        <Row>
          Show <button>{pagination.max} ^</button> results
        </Row>
      </Row>
    </Column>
  </Card>

export default FacetSearchResults
