import "./styles.css"
import React   from "react"
import actions from "../_actions/tacos"



let {number} = React.PropTypes;



export default React.createClass({
  displayName : "Title",

  propTypes : {
    count : number
  },

  render() {
    let {doubleClick, props} = this;
    let {count}              = props;

    return <div onDoubleClick={doubleClick} className="Title">
      <div className="Title_title">Taco App</div>
      {count > 0 && <div className="Title_count">{count}</div>}
    </div>
  },

  doubleClick(e) {
    e.preventDefault();
    actions.resetCounts();
  }
});

