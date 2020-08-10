import app from "./app";
import { port } from "./config/server.config";

app.listen(port, () => {
  console.log("Server Online");
});
