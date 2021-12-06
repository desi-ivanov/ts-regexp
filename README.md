# ts-regexp
Regular expressions matching at compile time with TypeScript.
## Example
Given the following regexp `((((a)(b))*)+(a))`, TypeScript says it matches the strings `a`, `ab`, `abababab`, `ababababab`, but it rejects `b` ,`ba` ,`baa` ,`baaa`:
```ts
import { Parse } from "./Parse";
import { Match } from "./Match";

type r1 = Parse<"((((a)(b))*)+(a))">;
type t1 = Match<r1, "a">; // expected type: true
type t2 = Match<r1, "ab">; // expected type: true
type t3 = Match<r1, "abababab">; // expected type: true
type t4 = Match<r1, "ababababab">; // expected type: true

type f1 = Match<r1, "b">; // expected type: false
type f2 = Match<r1, "ba">; // expected type: false
type f3 = Match<r1, "baa">; // expected type: false
type f4 = Match<r1, "baaa">; // expected type: false
```