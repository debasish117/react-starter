import React from "react";

export default function Alerts(props) {
  console.log(props.alert)
  return (
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.typ.toUpperCase()}</strong> : {props.alert.msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
