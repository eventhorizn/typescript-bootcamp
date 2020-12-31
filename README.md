# TypeScript Overview

## What is TypeScript

1. A JavaScript Superset
   - Built up on JS
   - Adds new features and advantages
1. Browser's can't execute TS (need a compiler!)
   - Neither can Node
   - So we compile TS to JS (built in)
1. TS compiler builds features to js 'workarounds'
   - Possbile errors are possible
1. Adds 'types' to JS
   - Fixes type 'runtime' errors to compile errors
1. Compiler generates js that works in older browsers
   - Can use modern js
1. Access to non-js features
   - Interfaces, Generics, Decorators

## Install TypeScript

1. [TypeScript Site](https://www.typescriptlang.org/#installation)
1. [Install Node](https://nodejs.org/en/)
1. Run
   ```cmd
   npm install -g typescript
   ```
1. Compile ts file to js
   ```cmd
   tsc file.ts
   ```

# TypeScript Types

## Core Types

1. number
   - Only one number type (js thing)
1. string
   - All text values
1. boolean
   - No truthy or falsy

**Core primitives are always lowercase**

## Object Types

TypeScript creates a key/type pair when you define an object

```ts
const person = {
	name: 'Gary',
	age: 31,
};
```

```ts
const person: {
	name: string;
	age: number;
};
```

## Type Aliases

Define Object

```ts
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
```

Function Simplification

```ts
function greet(user: { name: string; age: number }) {
	console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
	return checkAge > user.age;
}

type User = { name: string; age: number };

function greet(user: User) {
	console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
	return checkAge > user.age;
}
```
