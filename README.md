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

const t1: Match<r1, "a"> = true;
const t2: Match<r1, "ab"> = true;
const t3: Match<r1, "abababab"> = true;
const t4: Match<r1, "ababababab"> = true;

const f1: Match<r1, "b"> = false;
const f2: Match<r1, "ba"> = false;
const f3: Match<r1, "baa"> = false;
const f4: Match<r1, "baaa"> = false;

type r2 = Parse<"(((a)(b))+(c))">;
// For example, saying that "b" belongs to (((a)(b))+(c)) is wrong, thus TS rejects it and generates an error:
const err: Match<r2, "b"> = true; // Type 'true' is not assignable to type 'false'

```