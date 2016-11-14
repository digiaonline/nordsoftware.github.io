import React, { PropTypes } from "react"
import toLower from "lodash/toLower"
import { connect } from "react-redux"
import { filterBy } from "../../app/actions"

class FilterItem extends React.Component {
  static propTypes = {
    dispatch: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]),
    items: PropTypes.array,
  };

  constructor(props) {
    super(props)
  }

  filterByLang(item) {
    const { dispatch } = this.props
    dispatch(filterBy(item))
  }

  render() {
    const { items } = this.props

    return (
      <div className="homepage--languages-list">
        { items.map((item, index) => {
          return (
          <span key={ index }
            className={ toLower(item) }
            onClick={ this.filterByLang.bind(this, item) }
          >
            { item }
          </span>)
        }) }
      </div>
    )
  }

}

export default connect()(FilterItem)
