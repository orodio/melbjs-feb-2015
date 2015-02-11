import get from "oro-xhr/lib/get"

export default function() {
  return get("/api/v1/tacos");
}
