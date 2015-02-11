import "./styles.css"
import React        from "react"
import subscribe    from "dispy/subscribe"
import actions      from "./actions"
import store        from "./store"



import TacosActions from "../_actions/tacos"



function state() {
  return {
    title      : store.getTitle(),
    validTitle : store.validTitle()
  };
}



export default React.createClass({
  displayName : "TacoForm",

  mixins : [subscribe(state, store)],

  render() {
    let {title, validTitle} = this.state;

    return <form onSubmit={this.submite} className="TacoForm">
      <input value={title} onChange={this.changeTitle} className="TacoForm_input"/>
      {validTitle && <button onClick={this.submit} className="TacoForm_action">
        <i className="fa fa-plus"/>
      </button>}
    </form>
  },

  changeTitle(e) {
    e.preventDefault();
    actions.updateTitle(e.target.value);
  },

  submit(e) {
    e.preventDefault();
    if (!this.state.validTitle) return;
    TacosActions.create(this.state.title);
  }
});

