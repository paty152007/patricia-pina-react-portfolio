import React from "react";
import profilePicture from "../../../static/assets/images/bio/IMG-20260929-WA0032.jpeg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        hfkldjflksdjfsafkasdfjsdflsefkpefeowfweopfweofwefweffjieohfadhk
      </div>
    </div>
  );
}
