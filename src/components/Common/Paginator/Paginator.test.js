import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component", () => {
  test("totalItemsCount more then 10, but show only 10 pages", () => {
    const component = create(<Paginator totalItemsCount={100} pageSize={5} portionSize={10}/>);
    const instance = component.root;
    let span = instance.findAllByType("span");
    expect(span.length).toBe(10);
  });

  test("if rightPortionPageNumber less then 10, button `previous` is hide", () => {
    const component = create(<Paginator totalItemsCount={100} pageSize={5} portionSize={10}/>);
    const instance = component.root;
    let button = instance.findAllByType("button");
    expect(button.length).toBe(1);
  });
});
