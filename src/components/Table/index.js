import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

class ColumnItem extends Component {
  render () {
    const {
      item
    } = this.props
    return (
      <td>{item.title}</td>
    )
  }
}

class DataSourceItem extends Component {
  render () {
    const {
      columns,
      dataItem,
      index
    } = this.props

    const tds = columns.map(item => (item.render? item.render(dataItem, index, item.dataIndex): <td key={item.dataIndex}>{dataItem[item.dataIndex]}</td>))

    return (
      <tr>
        {tds}
      </tr>
    )
  }
}

class Columns extends Component {
  render () {
    const {
      columns
    } = this.props
    return (
      <thead>
      <tr>
        {columns.map(item => <ColumnItem item={item} key={item.key}/>)}
      </tr>
      </thead>
    )
  }
}

class DataSource extends Component {
  render () {
    const {
      dataSource,
      columns
    } = this.props

    let trs = dataSource.map((item, index) => <DataSourceItem key={item.id} dataItem={item} index={index} columns={columns}/>)

    return (
      <tbody>
      {trs}
      </tbody>
    )
  }
}

class Table extends Component {
  static propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array
  }

  static defaultProps = {
    columns: [],
    dataSource: []
  }

  render () {
    const {
      columns,
      dataSource,
      ...props
    } = this.props
    return (
      <div className="table-wrap">
        <table border="1" className="table">
          <Columns columns={columns}/>
          <DataSource columns={columns} dataSource={dataSource}/>
        </table>
      </div>
    )
  }
}

export default Table
