/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  render,
  renderHook,
  RenderHookResult,
} from "@testing-library/react";
import {
  ReactElement,
  ReactNode,
} from "react";

interface TRenderOptions {
  wrapper?: boolean;
}

/**
 * @description  custom render with wrappers
 * @param uiComponent - a component to test
 * @param options - for AppContext and Settings
 * @param options.wrapper - true if the hook should be wrapped
 * @returns - the rapped assertable component
 */
const customRender = (uiComponent: ReactElement, { wrapper = true }: TRenderOptions = {}) => {
  /**
   * @description wrapper component to provide all providers
   * @param properties - the component properties
   * @param properties.children - the wrapped children
   * @returns - the wrapped element with app providers
   */
  const AllTheProviders = ({ children }: { children: ReactNode; }) => {
    return <div>{children}</div>;
  };

  return wrapper ? render(uiComponent, { wrapper: AllTheProviders }) : render(uiComponent);
};

/**
 * @description renderHook function with app scaffolding
 * @param hook - the hook to test
 * @param options - the render options object
 * @param options.wrapper - the hook wrapper
 * @returns - the wrapped testable hook with app providers
 */
export const renderAppHook = (hook: () => any, { wrapper = true }: TRenderOptions = {}): RenderHookResult<any, any> => {
  /**
   * @description wrapper component to provide all providers
   * @param properties - the component properties
   * @param properties.children - child component to test
   * @returns - the hook wrapper with app providers
   */
  const AllTheProviders = ({ children }: { children: ReactNode; }) => {
    return <div>{children}</div>;
  };

  return wrapper
    ? renderHook(
      () => {
        return hook();
      },
      { wrapper: AllTheProviders },
    )
    : renderHook(() => {
      return hook();
    });
};

// re-export everything
// eslint-disable-next-line import/no-extraneous-dependencies,react-refresh/only-export-components,import/export
export * from "@testing-library/react";
// eslint-disable-next-line node/no-unpublished-import,import/no-extraneous-dependencies
export { default as userEvent } from "@testing-library/user-event";

// override render method with customRender
// eslint-disable-next-line import/export
export { customRender as render };
