import React   from "react"
import actions from "../_actions/tacos"



let {string} = React.PropTypes;



export default React.createClass({
  displayName : "Taco/Dec",

  propTypes: {
    id : string
  },

  render() {
    return <button onClick={this.click} className="Taco_action">
      <i className="fa fa-minus"/>
    </button>
  },

  click(e) {
    e.preventDefault();
    actions.dec(this.props.id);
  }
});
