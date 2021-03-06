import React, { Component } from "react";
import shaadiimage from "../images/shaadi.jpg";
import Typography from "@material-ui/core/Typography";
import "./homePageStyle.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <img
          src={shaadiimage}
          style={{ width: "100%", height: "100%" }}
          alt="shaadi"
        ></img>
        <div>
          <Typography variant="h4">
            <a
              style={{ color: "white", textDecoration: "none" }}
              className="text centered"
              href="/"
            >
              EaseOurशादी
            </a>
          </Typography>
        </div>

        <div className="description">
          <p />
          Marriage is special occasion. It's a bond formed by two people. Make
          it timeless and effortless.
          <p />
          Browse through all the services in the shop and get the best and most
          cost efficient in your locality.
          <p />
          Make your marriage momentous.
        </div>
      </div>
    );
  }
}

export default Home;
