import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <div
        style={{
          padding: "20px",
          margin: "20px",
        }}
      ></div>

      <div style={{ textAlign: "center", padding: "20px", margin: "20px" }}>
        <h1>404 Not Found, Something went wrong 🤬</h1>
        <p>{err.statusText}</p>
        <p>{err.status}</p>
      </div>
    </div>
  );
};

export default Error;
