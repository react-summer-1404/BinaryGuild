import React from "react";
import instance from "../../interceptor";

export const Reset = (ConfigValue) => {
  return instance.get(`/Sign/Reset/${ConfigValue}`);
};