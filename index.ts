import {
  getContext as svelteGetContext,
  setContext as svelteSetContext,
} from "svelte"

/**
 * Provided as key to getContext and setContext in order to enable strict typing
 */
export interface InjectionKey<T = unknown> { }

type getContext = <T>(key: InjectionKey<T>) => undefined | T
type setContext = <T>(key: InjectionKey<T>, context: T) => void

export const getContext = svelteGetContext as getContext
export const setContext = svelteSetContext as setContext
