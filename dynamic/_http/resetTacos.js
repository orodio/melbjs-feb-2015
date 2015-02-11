import del from "oro-xhr/lib/delete"

export default function() {
  return del("/api/v1/tacos");
}

