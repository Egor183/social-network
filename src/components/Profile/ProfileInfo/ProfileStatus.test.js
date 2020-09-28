import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status in props should be in the state", () => {
    const component = create(<ProfileStatus status="user test status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("user test status");
  });

  test("after creation `span` should be displayed", () => {
    const component = create(<ProfileStatus status="user test status" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span.length).not.toBeNull();
  });

  test("after creation `input` shouldn't  be displayed", () => {
    const component = create(<ProfileStatus status="user test status" />);
    const instance = component.root;
    expect(() => {
      instance.findByType("input");
    }).toThrow();
  });

  test("after creation `span` should be contains correct status", () => {
    const component = create(<ProfileStatus status="user test status" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span.children[0]).toBe("user test status");
  });

  test("after click on `span` `input` should  be displayed instead of `span`", () => {
    const component = create(<ProfileStatus status="user test status" />);
    const instance = component.root;
    let span = instance.findByType("span");
    span.props.onDoubleClick();
    let input = instance.findByType("input");
    expect(input.props.value).toBe("user test status");
  });

  test("callback should be called ", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="user test status" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
