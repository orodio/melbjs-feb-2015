import post from "oro-xhr/lib/post"

export default function(id) {
  return post("/api/v1/taco/dec", {id});
}


