import Projection from "dispy/projection"



let __tacos = {};



let store = new Projection("TACOS");



store.register("TACOS_UPDATE", function(payload) {
  __tacos = payload.action.tacos;
});

store.register("TACO_UPDATE", function(payload) {
  let {taco}       = payload.action;
  __tacos[taco.id] = taco;
});



store.getAll = function() { return __tacos }



export default store;
