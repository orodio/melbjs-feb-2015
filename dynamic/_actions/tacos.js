import send       from "dispy/send"
import getTacos   from "../_http/getTacos"
import incTaco    from "../_http/incTaco"
import decTaco    from "../_http/decTaco"
import delTaco    from "../_http/deleteTaco"
import createTaco from "../_http/createTaco"



function updateTacos(res) { send("TACOS_UPDATE", {tacos : JSON.parse(res.text)}); }
function updateTaco(res)  { send("TACO_UPDATE",  {taco  : JSON.parse(res.text)}); }
function resetTacoForm()  { send("TACOS_FORM_RESET"); }



function poll()  {
  getTacos()
    .then(updateTacos)
}

function del(id) {
  // delTaco(id)
  //   .then(updateTacos)
}

function inc(id) {
  // incTaco(id)
    // .then(updateTaco)
}

function dec(id) {
  // decTaco(id)
  //   .then(updateTaco)
}

function create(title) {
  createTaco(title)
    .then(updateTaco)
    .then(resetTacoForm)
}



export default { poll, inc, dec, del, create };



function consRes(res) { console.log(JSON.parse(res.text)); }
