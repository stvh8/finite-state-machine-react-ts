import { isEmpty } from "lodash";

import {
  FiniteStateMachine,
  TFiniteStateMachineDefinition,
} from "@/utils/FiniteStateMachine";

// regex for matching a valid binary string
export const validBinaryRegEx = new RegExp(/\b[01]+\b/);

/**
 * @description modThree state machine definition
 */
const stateMachineDefinition: TFiniteStateMachineDefinition = {
  initialState: "S0",
  states: {
    S0: {
      transitions: {
        S1: {
          /**
           * @description transition from S0 to S1 action
           */
          action: () => {
            // eslint-disable-next-line no-console
            console.log("transition action: S0 => S1");
          },
          target: "S1",
        },
      },
    },
    S1: {
      transitions: {
        S0: {
          /**
           * @description transition from S1 to S0 action
           */
          action: () => {
            // eslint-disable-next-line no-console
            console.log("transition action: S1 => S0");
          },
          target: "S0",
        },
        S2: {
          /**
           * @description transition from S1 to S2 action
           */
          action: () => {
            // eslint-disable-next-line no-console
            console.log("transition action: S1 => S2");
          },
          target: "S2",
        },
      },
    },
    S2: {
      transitions: {
        S1: {
          /**
           * @description transition from S2 to S0 action
           */
          action: () => {
            // eslint-disable-next-line no-console
            console.log("transition action: S2 => S1");
          },
          target: "S1",
        },
      },
    },
  },
};

const { createMachine } = FiniteStateMachine();
const machine = createMachine(stateMachineDefinition);

/**
 * @description example implementation of a finite state machine solving a mod 3 on a bit string input
 * @param input - the input binary string to process
 * @returns the mod 3 result
 */
export const modThree = (input: string): number => {
  // validate input to be a string matching a binary number pattern
  if (typeof input !== "string" || (!isEmpty(input) && !validBinaryRegEx.test(input))) {
    return 0;
  }

  // reset machine to initial state
  machine.reset();

  // loop through input array of characters
  for (const bit of input) {
    switch (machine.currentState) {
      case "S0": {
        if (bit === "1") {
          machine.transition(machine.currentState, "S1");
        }
        break;
      }

      case "S1": {
        if (bit === "0") {
          machine.transition(machine.currentState, "S2");
        }
        else {
          machine.transition(machine.currentState, "S0");
        }
        break;
      }

      case "S2": {
        if (bit === "0") {
          machine.transition(machine.currentState, "S1");
        }
        break;
      }
    }
  }

  const lastIndex = -1;
  return Number(machine.currentState.slice(lastIndex));
};
