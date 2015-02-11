import del from "oro-xhr/lib/delete"

export default function(id) {
  return del("/api/v1/taco", {id});
}
