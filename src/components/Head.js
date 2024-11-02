// src/components/Head.js
import { Helmet } from "react-helmet";

function Head() {
  return (
    <Helmet>
      <title>Odidi Hope</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:400,300,700,800"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
  );
}

export default Head;
