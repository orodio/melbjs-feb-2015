import "./styles.css"
import React   from "react"
import actions from "../_actions/tacos"

let {array, number} = React.PropTypes;

export default React.createClass({
  displayName : "TacosActions",

  propTypes : {
    tacos : array,
    total : number
  },

  render() {
    let {resetCounts, resetAll, props} = this;
    let {tacos, total}                = props;

    if (tacos.length < 1 && total < 1) return null;

    return <div className="TacosActions">
      {tacos.length > 0 && <button onClick={resetAll}>Reset All</button>}
      {total > 0        && <button onClick={resetCounts}>Reset Counts</button>}
    </div>
  },

  resetCounts(e) {
    e.preventDefault();
    actions.resetCounts();
  },

  resetAll(e) {
    e.preventDefault();
    actions.resetAll();
  }
});
