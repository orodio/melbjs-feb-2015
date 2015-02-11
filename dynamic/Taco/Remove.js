import React   from "react"
import actions from "../_actions/tacos"



let {string} = React.PropTypes;



export default React.createClass({
  displayName : "Taco/Remove",

  propTypes: {
    id : string
  },

  render() {
    return <button onClick={this.click} className="Taco_action">
      <i className="fa fa-times"/>
    </button>
  },

  click(e) {
    e.preventDefault();
    actions.del(this.props.id);
  }
});

