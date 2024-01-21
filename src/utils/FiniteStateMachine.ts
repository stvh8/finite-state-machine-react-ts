/**
 * @description transition actions
 */
interface TActions {
  /**
   * @description on enter transition event handler
   */
  onEnter?: () => void;
  /**
   * @description on exit transition event handler
   */
  onExit?: () => void;
}

/**
 * @description a state transition event
 */
interface TEvent {
  /**
   * @description an event handler action
   */
  action?: () => void;
  /**
   * @description target event name
   */
  target: string;
}

/**
 * @description a possible state definition
 */
interface TState {
  /**
   * @description state actions
   */
  actions?: TActions;
  /**
   * @description state transition events
   */
  transitions?: {
    [key: string]: TEvent;
  };
}

/**
 * @description the finite state machine definition
 */
export interface TFiniteStateMachineDefinition {
  /**
   * @description the initial state of the machine
   */
  initialState: string;
  /**
   * @description the possible state definitions
   */
  states: {
    [key: string]: TState;
  };
}

/**
 * @description the create machine function return
 */
interface TCreateMachineReturn {
  /**
   * @description the current state
   */
  currentState: string;
  /**
   * @description resets the machine to the definition initial state
   */
  reset: () => string | undefined;
  /**
   * @description handles the transition logic
   */
  transition: (currentState: string, event: string) => undefined | string;
}

export interface TFiniteStateMachineReturn {
  createMachine(stateMachineDefinition: TFiniteStateMachineDefinition): TCreateMachineReturn;
}

/**
 * @description creates a finite state machine
 * @param stateMachineDefinition - the finite state machine definition
 * @returns - TCreateMachineReturn
 */
const createMachine = (stateMachineDefinition: TFiniteStateMachineDefinition) => {
  const machine: TCreateMachineReturn = {
    currentState: stateMachineDefinition.initialState,

    /**
     * @description resets machine to initial state
     * @returns - the updated current state
     */
    reset: () => {
      machine.currentState = stateMachineDefinition.initialState;
      return machine.currentState;
    },

    /**
     * @description transition event handler
     * @param currentState - the current state
     * @param event - the transition event
     * @returns - the updated current state
     */
    transition: (currentState: string, event: string) => {
      const currentStateDefinition = stateMachineDefinition.states[`${currentState}`];
      if (!currentStateDefinition) {
        return;
      }

      const destinationTransition = currentStateDefinition.transitions?.[`${event}`];
      if (!destinationTransition) {
        return;
      }

      // if defined, execute the current state onExit action
      if (currentStateDefinition.actions?.onExit) {
        currentStateDefinition.actions?.onExit();
      }

      const destinationState = destinationTransition.target;

      // if defined, execute the new state transition action
      if (destinationTransition.action) {
        destinationTransition.action();
      }

      const destinationStateDefinition = stateMachineDefinition.states[`${destinationState}`];
      if (!destinationStateDefinition) {
        return;
      }

      // if defined, execute the new state onEnter action
      if (destinationStateDefinition.actions?.onEnter) {
        destinationStateDefinition.actions?.onEnter();
      }

      machine.currentState = destinationState;

      return machine.currentState;
    },
  };

  return machine;
};

/**
 * @description FiniteStateMachine
 * @returns - TFiniteStateMachineReturn
 */
export const FiniteStateMachine = (): TFiniteStateMachineReturn => {
  return { createMachine };
};
