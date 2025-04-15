import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>

      {props.meaning.example && (
        <div>
          <strong>Example:</strong> <em>{props.meaning.example}</em>
        </div>
      )}

      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <Synonyms synonyms={props.meaning.synonyms} />
      )}
    </div>
  );
}
