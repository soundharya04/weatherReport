import React from "react";

export const ImageCard = (props) => {
  return (
    <div className="weather">
      <div className="text-center py-4">
        <img className="card-img" src={props.src} alt="temp-1"></img>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title text-uppercase font-roboto">{props.title}</h5>
        <p
          className="card-text"
          style={{
            color: "teal",
            fontSize: "larger",
            fontWeight: "bold",
          }}
        >
          {props.children}
        </p>
      </div>
    </div>
  );
};

export const Spinner = () => <div className="Loader">Loading...</div>;
