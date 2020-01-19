import React from "react";
import { mount } from "enzyme";
import Login from "./Login";

let wrapper;

beforeEach(() => {
  wrapper = mount(<Login />);
});

it("should contain Login Text", () => {
  expect(wrapper.find("button"));
});
