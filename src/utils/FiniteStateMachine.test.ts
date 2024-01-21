import {
  describe,
  expect,
  test,
  vi,
} from "vitest";

import {
  FiniteStateMachine,
  TFiniteStateMachineDefinition,
} from "./FiniteStateMachine";

const testStateMachineDefinition: TFiniteStateMachineDefinition = {
  initialState: "off",
  states: {
    off: {
      actions: {
        onEnter: vi.fn(),
        onExit: vi.fn(),
      },
      transitions: {
        on: {
          action: vi.fn(),
          target: "on",
        },
      },
    },
    on: {
      actions: {
        onEnter: vi.fn(),
        onExit: vi.fn(),
      },
      transitions: {
        off: {
          action: vi.fn(),
          target: "off",
        },
      },
    },
  },
};

describe("FiniteStateMachine", () => {
  test("Should initialize", () => {
    const { createMachine } = FiniteStateMachine();
    const machine = createMachine(testStateMachineDefinition);

    expect(machine).toBeDefined();
  });

  test("Should transition to on state as expected with actions", () => {
    const { createMachine } = FiniteStateMachine();
    const machine = createMachine(testStateMachineDefinition);

    expect(machine).toBeDefined();

    machine.transition(machine.currentState, "on");

    expect(testStateMachineDefinition.states.off?.actions?.onExit).toHaveBeenCalled();
    expect(testStateMachineDefinition.states.on?.actions?.onEnter).toHaveBeenCalled();
    expect(testStateMachineDefinition.states.off?.transitions?.on?.action).toHaveBeenCalled();
    expect(machine.currentState).toEqual("on");
  });

  test("Should handle missing states", () => {
    const { createMachine } = FiniteStateMachine();
    const machine = createMachine({
      initialState: "off",
      states: {},
    });

    expect(machine).toBeDefined();

    machine.transition(machine.currentState, "bad-state");

    expect(machine.currentState).toEqual("off");
  });

  test("Should handle invalid destination state config", () => {
    const { createMachine } = FiniteStateMachine();
    const machine = createMachine({
      ...testStateMachineDefinition,
      states: {
        off: {
          actions: {
            onEnter: vi.fn(),
            onExit: vi.fn(),
          },
          transitions: {
            on: {
              action: vi.fn(),
              target: "unknown",
            },
          },
        },
        on: {
          actions: {
            onEnter: vi.fn(),
            onExit: vi.fn(),
          },
          transitions: {
            off: {
              action: vi.fn(),
              target: "off",
            },
          },
        },
      },
    });

    expect(machine).toBeDefined();

    machine.transition(machine.currentState, "on");

    expect(machine.currentState).toEqual("off");
  });

  test("Should handle NOT transition to an invalid state", () => {
    const { createMachine } = FiniteStateMachine();
    const machine = createMachine(testStateMachineDefinition);

    expect(machine).toBeDefined();

    machine.transition(machine.currentState, "bad-state");

    expect(machine.currentState).toEqual("off");
  });

  test("Should reset", () => {
    const { createMachine } = FiniteStateMachine();
    const machine = createMachine(testStateMachineDefinition);

    expect(machine).toBeDefined();

    machine.transition(machine.currentState, "on");

    expect(testStateMachineDefinition.states.off?.actions?.onExit).toHaveBeenCalled();
    expect(testStateMachineDefinition.states.on?.actions?.onEnter).toHaveBeenCalled();
    expect(testStateMachineDefinition.states.off?.transitions?.on?.action).toHaveBeenCalled();
    expect(machine.currentState).toEqual("on");

    machine.reset();

    expect(machine.currentState).toEqual("off");
  });
});
