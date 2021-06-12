# Svelte Typed Context

The library provides an interface called `InjectionKey` which when provided to `getContext` or `setContext` allows for stricter types.

It also re-exports `getContext` and `setContext` with types made to work with InjectionKey.

## Usage

For the best experience, enable strict mode in your tsconfig.json

```ts
// in key
import type { InjectionKey } from "svelte-typed-context"

export const key : InjectionKey<{ foo: number }> = Symbol('Desired type')

// in provider component
import { setContext } from "svelte-typed-context"
import { key } from "./key"


setContext(key, "bob") // bad -> would error out
setContext(key, { foo: 123 }) // good -> would work

// in consumer component
import { getContext } from "svelte-typed-context"
import { key } from "./key"

const contextValue = getContext(key) // automatically inferred as { foo: number }
```

## Credits

Inspired by Vue.