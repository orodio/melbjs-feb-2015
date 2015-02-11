import "./styles.css"
import "./debug"



import React     from "react"
import subscribe from "dispy/subscribe"
import Title     from "./Title"
import TacoForm  from "./TacoForm"
import Tacos     from "./Tacos"
import Actions   from "./TacosActions"


import map    from "lodash/collection/map"
import reduce from "lodash/collection/reduce"



import tacoActions from "./_actions/tacos"
import tacosStore  from "./_stores/tacos"



function state() {
  return {
    tacos : tacosStore.getAll(),
  }
}



let App = React.createClass({
  displayName : "App",

  mixins: [subscribe(state, tacosStore)],

  componentDidMount() { tacoActions.poll(); },

  render() {
    let {tacos} = this.state;

    let total = reduce(tacos, calcTotal, 0);
    let ts    = map(tacos, d => d).reverse();

    return <div className="App">
      <Title count={total}/>
      <TacoForm/>
      <Tacos tacos={ts}/>
      <Actions tacos={ts} total={total}/>
    </div>
  }
});



React.render(<App/>, document.body);



function calcTotal(acc, d) { return acc + d.count; }
