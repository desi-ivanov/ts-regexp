# ts-regexp
Regular expressions matching at compile time with TypeScript.

## Syntax
The syntax of regular expressions is defined as follows:
- `(∅)` is a regular expression denoting the empty language
- `(ε)` is a regular expression denoting the language with just the empty string
- Given a symbol `r` of the alphabet, the atom regular expression is defined as `(r)`
- Given two regular expressions `F` and `G`, the union is defined as `(F+G)`
- Given two regular expressions `F` and `G`, the concatenation is defined as `(FG)`
- Given a regular expression `F`, the star is defined as `(F*)`


## Parsing
Given an alphabet `{a,b,c}` and a regular expression `(((a)(b))+(c))`, the parser derives the following AST:
```ts
type r2 = Parse<"(((a)(b))+(c))">
type parsed = RSum<RSeq<RAtom<"a">, RAtom<"b">>, RAtom<"c">>
```

## Matching
Given a regular expression `((((a)(b))*)+(a))`, TypeScript says it matches the strings `a`, `ab`, `abababab`, `ababababab`, but it rejects `b` ,`ba` ,`baa` ,`baaa`:
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