import "./styles.css"
import React from "react"
import Taco  from "../Taco"



let {array} = React.PropTypes;



export default React.createClass({
  displayName : "Tacos",

  propTypes : {
    tacos : array
  },

  render() {
    let {tacos} = this.props;

    return <div className="Tacos">
      {[for(t of tacos) <Taco {...t} key={t.id}/>]}
    </div>
  }
});

