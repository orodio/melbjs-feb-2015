import send       from "dispy/send"
import getTacos   from "../_http/getTacos"
import incTaco    from "../_http/incTaco"
import decTaco    from "../_http/decTaco"
import delTaco    from "../_http/deleteTaco"
import createTaco from "../_http/createTaco"

import resetTacosCount from "../_http/resetTacosCount"
import resetTacoCount  from "../_http/resetTacoCount"
import resetTacos      from "../_http/resetTacos"

function updateTacos(res) { send("TACOS_UPDATE", {tacos : JSON.parse(res.text)}); }
function updateTaco(res)  { send("TACO_UPDATE",  {taco  : JSON.parse(res.text)}); }
function resetTacoForm()  { send("TACOS_FORM_RESET"); }



function poll()  {
  getTacos()
    .then(updateTacos)
}

function create(title) {
  createTaco(title)
    .then(updateTaco)
    .then(resetTacoForm)
}

function del(id) {
  delTaco(id)
    .then(updateTacos)
}

function inc(id) {
  incTaco(id)
    .then(updateTaco)
}

function dec(id) {
  decTaco(id)
    .then(updateTaco)
}

function resetCount(id) {
  resetTacoCount(id)
    .then(updateTaco)
}

function resetCounts() {
  resetTacosCount()
    .then(updateTacos)
}

function resetAll() {
  resetTacos()
    .then(updateTacos)
}

export default {
  poll, inc, dec, del, create,
  resetCount, resetCounts, resetAll };
