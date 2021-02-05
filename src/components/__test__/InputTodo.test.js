import { InputTodo } from "../InputTodo";
import renderer from "react-test-renderer";

let testInstance = null;
let todoText = "test";
let disabled = true;

beforeEach(() => {
  testInstance = renderer.create(
    <InputTodo
      todoText={todoText}
      onChange={() => {}}
      onClick={() => {}}
      disabled={disabled}
    />
  ).root;
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
