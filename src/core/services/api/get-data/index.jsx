import React from "react";
import instance from "../../interceptor";

export const Reset = () => {
  return instance.get("/Sign/Reset/:ConfigValue");
};