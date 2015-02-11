import React   from "react"
import actions from "../_actions/tacos"



let {number} = React.PropTypes;



export default React.createClass({
  displayName : "Taco/Count",

  propTypes : {
    count : number
  },

  render() {
    let {doubleClick, props} = this;
    let {count}              = props;

    return <div
      onDoubleClick={doubleClick}
      className="Taco_count"
      title="Double Click Me To Clear Count"
    >{count}</div>
  },

  doubleClick(e) {
    e.preventDefault();
    actions.resetCount(this.props.id);
  }
});
