import React from "react";

function Home() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h3>Hello there! My name is</h3>
            <h1 className="surname">Odidi</h1>
            <h1 style={{ color: "black", borderColor: "black" }}>Hope</h1>
            <div className="wrapper">
              <h3 aria-label="I'm a developer, writer, reader, and human.">
                Hi! I'm a{" "}
                <span className="typewriter" style={{ color: "black" }}></span>
              </h3>
            </div>
            <p style={{ color: "white" }}>
              I'm a software engineer oriented in building software that
              improves the quality of life...
            </p>
            <h4>Want to know more about me?</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                href="#about"
                className="btn btn-default smoothScroll"
                style={{ marginRight: "30px" }}
              >
                Get started
              </a>
              <a className="btn btn-default smoothScroll" download>
                Download CV
              </a>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
