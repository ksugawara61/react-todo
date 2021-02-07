import React from "react";
import renderer from "react-test-renderer";
import { jest } from "@jest/globals";
import { InputTodo } from "../../components/InputTodo";
import placeholder from "../../lib/placeholder";

let testInstance = null;
let todoText = "test";
let disabled = true;

beforeEach(() => {
  const tree = renderer.create(
    <InputTodo
      todoText={todoText}
      onChange={() => {}}
      onClick={() => {}}
      disabled={disabled}
    />
  );
  testInstance = tree.root;
});

it("input placeholder is TODOを入力", () => {
  expect(testInstance.findByType("input").props.placeholder).toBe("TODOを入力");
});

describe("placeholderText method returns TODO", () => {
  beforeAll(() => {
    jest.spyOn(placeholder, "getText").mockImplementation(() => {
      return "TODO";
    });
  });

  it("input placeholder is TODO", () => {
    expect(testInstance.findByType("input").props.placeholder).toBe("TODO");
  });
});

describe("todoText is hello!", () => {
  beforeAll(() => {
    todoText = "hello!";
  });

  it("input value is hello!", () => {
    expect(testInstance.findByType("input").props.value).toBe("hello!");
  });
});

describe("disabled is true", () => {
  beforeAll(() => {
    disabled = true;
  });

  it("button is able", () => {
    expect(testInstance.findByType("button").props.disabled).toBe(true);
  });
});

describe("disabled is false", () => {
  beforeAll(() => {
    disabled = false;
  });

  it("button is able", () => {
    expect(testInstance.findByType("button").props.disabled).toBe(false);
  });
});
