import React, { PropTypes } from "react"

const ReactIcon = ({ index }) => {
  const fillArray = [
    "#FF2D55",
    "#FF9500",
    "#FF3B30",
    "#4CD964",
    "#007AFF",
    "#5856D6",
    "#FFCC00",
    "#34AADC",
    "gold",
  ]

  let fill = fillArray[index%(fillArray.length)]

  return (
    <svg className="list-project-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect fill={ fill } x="0" y="0" width="24" height="24"></rect>
      <path fill="#ffffff" d="M8.5,6.583l0,10.834l8.512,-5.417l-8.512,-5.417Z"></path>
    </svg>
  )
}

ReactIcon.propTypes = {
  index: PropTypes.number,
}

export default ReactIcon
