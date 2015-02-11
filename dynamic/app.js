import "./styles.css"
import "./debug"



import React     from "react"
import subscribe from "dispy/subscribe"
import Title     from "./Title"
import TacoForm  from "./TacoForm"
import Tacos     from "./Tacos"



import map    from "lodash/collection/map"
import reduce from "lodash/collection/reduce"



import TacoActions from "./_actions/tacos"
import TacosStore  from "./_stores/tacos"



function state() {
  return {
    tacos : TacosStore.getAll(),
  }
}



let App = React.createClass({
  displayName : "App",

  mixins: [subscribe(state, TacosStore)],

  componentDidMount() { TacoActions.poll(); },

  render() {
    let {tacos} = this.state;

    let total = reduce(tacos, calcTotal, 0);
    let ts    = map(tacos, d => d).reverse();

    return <div className="App">
      <Title count={total}/>
      <TacoForm/>
      <Tacos tacos={ts}/>
    </div>
  }
});



React.render(<App/>, document.body);



function calcTotal(acc, d) { return acc + d.count; }
