import React, { useContext } from "react";
import { infoContext } from "../context/InfoContext";

function Components2() {
  const { info } = useContext(infoContext);

  return (
    <div>
      Component2
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
        dolorum sit perferendis velit sequi iure nemo fuga, incidunt deleniti
        porro?
      </p>
      <h4>{info.join(", ")} </h4>
    </div>
  );
}

export default Components2;
