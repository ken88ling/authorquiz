import React from "react";
import ReactDom from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

function Hello(props) {
  return <h1>Hello at {props.now}</h1>;
}

const moment = new Date(1588956565);
describe("when test directly", () => {
  let result;
  beforeAll(() => {
    result = Hello({ now: moment.toISOString() });
  });

  it("return a value", () => {
    expect(result).not.toBeNull();
  });

  it("is a h1", () => {
    expect(result.type).toBe("h1");
  });

  it("has chilren", () => {
    expect(result.props.children).toBeTruthy();
  });
});

// test Dom
describe("when test with ReactDom", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Hello now={moment.toISOString()} />, div);
  });
});

Enzyme.configure({ adapter: new Adapter() });

describe("when testing with enzyme", () => {
  it("render a h1", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.find("h1").length).toBe(1);
  });

  // it("contains hello at 2020-05008t15", () => {
  //   const wrapper = shallow(<Hello now={moment.toISOString()} />);
  //   expect(wrapper.contains(<h1>Hello at 2020-05-08T14:00</h1>)).toBe(true);
  // });
});
