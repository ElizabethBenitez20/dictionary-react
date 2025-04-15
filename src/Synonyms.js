import React from "react";

export default function Meaning(props) {
  if (props.synonyms) {
    return (
      <div>
        <strong>Synonyms:</strong>
        <ul>
          {props.synonyms.map((synonym, index) => (
            <li key={index}>{synonym}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
