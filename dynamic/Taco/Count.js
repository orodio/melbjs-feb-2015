import React from "react"



let {number} = React.PropTypes;



export default React.createClass({
  displayName : "Taco/Count",

  propTypes : {
    count : number
  },

  render() {
    let {count} = this.props;

    return <div className="Taco_count">
      {count}
    </div>
  }
});
