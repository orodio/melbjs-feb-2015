import send from "dispy/send"



function updateTitle(title) {
  send("TACOS_FORM_UPDATE_TITLE", {title});
}



export default { updateTitle }
