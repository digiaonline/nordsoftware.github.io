import React, { PropTypes } from "react"
import toLower from "lodash/toLower"
import { connect } from "react-redux"
import { filterBy } from "../../app/actions"
import classNames from "classnames"
import includes from "lodash/includes"

class FilterItem extends React.Component {
  static propTypes = {
    dispatch: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]),
    items: PropTypes.array,
    currentFilters: PropTypes.string,
  };

  constructor(props) {
    super(props)
  }

  filterByLang(item) {
    const { dispatch } = this.props
    dispatch(filterBy(item))
  }

  render() {
    const { items, currentFilters } = this.props

    return (
      <div className="homepage--languages-list">
        { items.map((item, index) => {
          return (
          <span key={ index }
            className={ classNames(toLower(item), { "selected" : includes(currentFilters, item) }) }
            onClick={ this.filterByLang.bind(this, item) }
          >
            { item }
          </span>)
        }) }
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    currentFilters: state.repoReducer.currentFilters,
  }
}

export default connect(mapStateToProps)(FilterItem)
