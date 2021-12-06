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
type r = Parse<"(((a)(b))+(c))">
type parsed = RSum<RSeq<RAtom<"a">, RAtom<"b">>, RAtom<"c">>
```

## Matching
Given a regular expression `((((a)(b))*)+(a))` (which is `(ab)* + a` with simplified syntax), TypeScript determines that the regular expression matches the strings `a`, `ab`, `abababab`, `ababababab`, and doesn't match the strings `b` ,`ba` ,`baa` ,`baaa`. 
The assignments of :
```ts
import { Parse } from "./Parse";
import { Match } from "./Match";

type r = Parse<"((((a)(b))*)+(a))">;

const t1: Match<r, "a"> = true;
const t2: Match<r, "ab"> = true;
const t3: Match<r, "abababab"> = true;
const t4: Match<r, "ababababab"> = true;

const f1: Match<r, "b"> = false;
const f2: Match<r, "ba"> = false;
const f3: Match<r, "baa"> = false;
const f4: Match<r, "baaa"> = false;
```

Given a regular expression `(((a)(b))+(c))`, which is `(ab) + c` with simplified syntax, the string `b` does not belong to the language of the regular expression. In fact, TypeScript evaluates that `Match<Parse<"(((a)(b))+(c))">, "b">` is `false`. 
Therefore, assigning a value `true` to a variable of type `Match<Parse<"(((a)(b))+(c))">, "b">` is wrong and the type-checker fails and throws `Type 'true' is not assignable to type 'false'`
```ts
// Type 'true' is not assignable to type 'false'
const err: Match<Parse<"(((a)(b))+(c))">, "b"> = true; 

// Type 'false' is not assignable to type 'true'
const err2: Match<Parse<"(((a)(b))+(c))">, "ab"> = false; 
```