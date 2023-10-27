import React from "react";
import { Tab } from "../types";

export default function Feed({
  type
}: {
  type: Tab,
}): React.ReactNode {

  
  return (
    <>
      {type}
    </>
  );
}
