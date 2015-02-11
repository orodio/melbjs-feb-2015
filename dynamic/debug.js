import dispy from "dispy"



if (false) {
  dispy.register(function(payload) {
    console.log(`~~~ disp: [${payload.action.actionType}]`, payload.action);
  });
}
