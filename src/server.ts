import app from "./app";

const port =
  process.env.NODE_ENV === "production"
    ? 8080
    : process.env.PORT || 8000;

app.listen(port, () => {
  console.log(
    `[Env: ${process.env.NODE_ENV}] Reelfake api is running on port ${port}`,
  );
});
