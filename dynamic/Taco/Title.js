import React from "react"



let {string} = React.PropTypes;



export default React.createClass({
  displayName : "Taco/Title",

  propTypes : {
    title : string
  },

  render() {
    let {title} = this.props;

    return <div className="Taco_title">
      {title}
    </div>
  }
});

