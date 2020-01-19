import React from "react";
import { useSpeech } from "react-use";

export default () => {
  const state = useSpeech("");

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
