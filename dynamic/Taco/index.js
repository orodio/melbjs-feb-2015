import "./styles.css"
import React  from "react"
import Dec    from "./Dec"
import Inc    from "./Inc"
import Remove from "./Remove"
import Title  from "./Title"
import Count  from "./Count"



let {string, number} = React.PropTypes;



export default React.createClass({
  displayName : "Taco",

  propTypes : {
    title : string,
    count : number,
    id    : string
  },

  render() {
    let {title, count, id} = this.props;

    return <div className="Taco">
      <Title title={title}/>
    </div>

    // return <div className="Taco">
    //   <Remove id={id}/>
    //   <Title title={title}/>
    //   <Dec id={id}/>
    //   <Count count={count}/>
    //   <Inc id={id}/>
    // </div>
  }
});

