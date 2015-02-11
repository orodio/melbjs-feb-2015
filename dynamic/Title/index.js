import "./styles.css"
import React from "react"



let {number} = React.PropTypes;



export default React.createClass({
  displayName : "Title",

  propTypes : {
    count : number
  },

  render() {
    let {count} = this.props;

    return <div className="Title">
      <div className="Title_title">Taco App</div>
      <div className="Title_count">{count}</div>
    </div>
  }
});

