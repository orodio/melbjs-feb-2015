import Projection from "dispy/projection"



let __title      = "";
let __titleValid = false;



let store = new Projection("TACOS_FORM");



store.register("TACOS_FORM_UPDATE_TITLE", function(payload) {
  __title = payload.action.title;
  __titleValid = __title.length > 0;
});

store.register("TACOS_FORM_RESET", function(payload) {
  __title      = "";
  __titleValid = false;
});



store.getTitle   = function() { return __title; }
store.validTitle = function() { return __titleValid; }



export default store;
