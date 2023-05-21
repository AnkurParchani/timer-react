import React from "react";

export default function Button({ btnClass, fontAwesomeBtnClass, onClick }) {
  return (
    <button onClick={onClick} className={btnClass}>
      <i className={fontAwesomeBtnClass}></i>
    </button>
  );
}
