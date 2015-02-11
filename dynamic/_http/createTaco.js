import post from "oro-xhr/lib/post"

export default function(title) {
  return post("/api/v1/tacos", {title});
}
