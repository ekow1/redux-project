import { useSelector } from "react-redux";
import { useState } from "react";

import CardDetails from "./CardDetails";

function Details({ filterNote }) {
  return (
    <div className="details flex flex-col">
      <div className="grid xl:grid-cols-4    md:grid-cols-2 place-items-center">
        {filterNote.map((note) => {
          return (
            <div className="" key={note.id}>
              <CardDetails note={note} index={note.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Details;
