# ts-regexp
Regular expressions matching at compile time with TypeScript.
Try it out in the [TS Playground](https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBDAnmYcBawoTgXjgIkFAifAbgChRJYFlUB5AO1T30FbgUi8aeJFOAZQCWAcwC2AQ1wFx+OAB8CAI1kL8AYxUEAJpvzBdAM13COnKj1pwAShixSA3jRQAuAgC9MEWQF9ylbk6oVozMcI68wK74EEw+flzUEdYAgjAQogA8AMIAfA6BUWoAFuJQpHDFpa5ZcL5mAUlW-ACumQBiADRwAOJ5eOG0UQDOreUANsAGMK5tJHBQIkXTPbXx5oHW-MAAjhmdPX1hBQRDO+OTy7Pzi8vdq-WJlk0wpXuHAy4nL2VzUDP3DwsfAACqVTgBZDL8Q78OCgGDABhaIZwAAGAAoACT2QQMAyYazAIYwbyoshwOAAfjgoKgEIyViJMDy8MRyLgAG1cfioHAADIXLrcgmMiS4gC65IpVMJYoYcJACKRKNRAEpscLeYziQAmUlS6Uy7UwHUKpXs-D4A2GmUcgVTLqWyU26WuY2m1nKtEAKg1eJFTIAzPqXRTqRznq97cyusbA87Q26mR7FWyVQBqP08wnE4Nk0My2n0uMs1Nern+rU3IWV2XiXE6hMF8NNVoZaOxm45WPAOWN60u1xMABumAHrpzJrNabRWJxtYA+iHQ9Si8BIe7S+aURXs1Zq3BNXWG02V5ymjt24LrF2e33T4O4COxwXXHbr+6H3Ah8BR1BrT+f5Sq4sKeuyqJZgSajeJBWpMsu1JqNOXpCGI4jWi2qTpBkajdpOp6uEhYEorYEAYeepE9sSBEVMh7IhOREYhFRMA0c+-4UoBmDkICGxrlChxrpC0J0TuR4ACo1nuvb1gwCbUqKsmiQQVqGtS4kAQQACSDDDuIYyCFoh4MGAzQwKp34EGuvIGPWEw6Dx-iPHwAByzRjGM4iKBMDKHFYyk2J4UrUrZYynMB1gBQxYYIFAzTABF-nESkaSZEeC45MFcCheFnGRclrZpbW+xHr0WVuR5Xk+W0W4zjAcUJWpsXxZpFWed5wAZGVeVJWW7IXrsR4lbW3Uym1VWdTVyn1S1TXjR1XW1V6M2NTa1IreOrg5ateXbYlAX8N8GTpZlMUbXl7GOQkQKoAAIpggijgyXQABrKahEiHPNPlWEt7LsVlAM9QFpFZYFWD7QV0VGqDwMFVhRXZrkWVvclWTkcETCaeDZFw31KKFcdxVSQSo0KS0mT3QsT37C9eFU49nXdK9OSnZZvXbpsl5DSTvJk3A32TX9KLndK5NtgNGQMzTLNdL0XTS0zLNsz1Wy7IreyywckP45sR1DWz5OXhrtN4b9EWXWQvFJOC4gwMUz1wHTUio7rlrle57U-Wzriu5zEHzkjMGBwSWT8AhcA1MlH3oU1tv20UUsPU9VhdLkafQppQOWZbZBJFAACMUj8fg6Jl+i4iquiiiqqq3qqumFe1-gOQ8WoMTEggBeuPHDuF46MiHCt5Dtwwncmj3dt9wXA-KEPDUjx3PCBpPCcZP30iKF529z1Iw9kKP48ACyr9Ps87zvLd7wvVuH-ABjd3AveJxv+C73g22L2P986qfL8z0oQeUhP4HyXtlFeT8p7-0dFvIBH99KnC-p3AwJ9IFr1frAuB2UEHAB4vnU0eAS7l0rtXWujc1DN1blbPOlhn5EkdiJPAz8Mj8V+l0TOVskgwCLkwqB9DS7EKrjXOuDcm6qnwAPFuNC+BTl4Qnfh5cm6kJEY3Su4jZ5SK4YGKQdChgZAEWXEhwj66qObufLeFjNGWBgEfHRfC9EGKUcY0RaiJGbwvpYzK0jUAPzsfIhxiijG1xMWItxb8rF8AMAQtBxQFGCOUSE1xMDB7ePAX42JAT4nONMeowBKSkgoPSUUOJhihHBJcWYvJKTOHWIAKxFIUZXb0YT8nWIAGwNICU0lprSZEAHZOn6Kbs0ge4hemoBgAADkGaXbpoyxkRImQAThmcMnpYzqkFPqXIjJQy5lKEWdlDpOzildLrmErehyDADJOY085joNBeKtgAemeT0Rm8pJBQGAMIdypQFRgG+UMIYggYhwCyWQ9EFDVRdAAO5FEEMUQ8KIK41zgOmWisLBAwCKHAEFogwAGQMIIYARkhiIAYC8EAXQyCvIQMUvF9VcTCDgIoOAWgIBEifBAeAihgBjBiCytI9LUCeQYL88QwhUAQAMCK+YPy-m8koECkFMQAB0cBaVvJ0tgtQMAujiVoPwNQCwwDwF-PpZodsuU4rtjExORDSnKPIZQmBV9BAom2hqrVcBxLFO+QYaAwAujiGBSIBgzK4CSD0mMeKzUJnYGjaUQQE04Ayo2Mwx1TjIXQpbm6vIPqPVwFhVgcVUakRyoiAAWliWoAA1gSWyggwrlqMjirAsKUSGr4AAchWj25F3L4ChpBcIBgqbhVJB7dtHtPru2oD7Q1AdRaGA8qjWGsdE7sBTpnT6n1zQGDt1EKIREPAGWBo8hALFZaDJMAQNgU4qBsU+rvnCKAfx7UsLBJ1AxQTRG5rwuE+e8U5hkCAA)!

## Syntax
The syntax of regular expressions is defined as follows:
- `∅` is a regular expression denoting the empty language
- `ε` is a regular expression denoting the language with just the empty string
- Given a symbol `r` of the alphabet, the atom regular expression is defined as `r`
- Given two regular expressions `F` and `G`, the union is defined as `F+G`
- Given two regular expressions `F` and `G`, the concatenation is defined as `FG`
- Given a regular expression `F`, the star is defined as `F*`

## Parsing
In the [Parse.ts](Parse.ts) file there is an implementation of a parser that can derive the AST following the above syntax.
It takes a raw string passed as a literal type and concretely produces a composition of the following types:
```ts
type Sigma      = "a" | "b" | "c" | "d" | "e" | "f" | "g";
type Zero       = "∅";
type One        = "ε";

type RZero      = { type: "zero" };
type ROne       = { type: "one" };
type RAtom<C>   = { type: "char"; char: C };
type RSum<F, G> = { type: "sum"; left: F; right: G };
type RSeq<F, G> = { type: "seq"; left: F; right: G };
type RStar<F>   = { type: "star"; r: F };
```
For instance, given a regular expression like `(a)(b)`, the parser derives the following AST:
```ts
type r = Parse<"(a)(b)">
type parsed = RSeq<RAtom<"a">, RAtom<"b">>
```

## Matching
The matching is available in [Match.ts](Match.ts) and uses derivatives on regular expression to match the strings. 
Given a regular expression `(a)*`, TypeScript infers that the regular expression matches the strings ` `, `a`, `aa`, `aaaa`, `aaaa`, but doesn't match the strings `b`, `ba`, `ab`, `c`:
```ts
type t5 = Matches<"(a)*", ""> // true
type t6 = Matches<"(a)*", "a"> // true
type t7 = Matches<"(a)*", "aa"> // true
type t8 = Matches<"(a)*", "aaa"> // true
type t9 = Matches<"(a)*", "aaaa"> // true

type f5 = Matches<"(a)*", "b"> // false
type f6 = Matches<"(a)*", "ba"> // false
type f7 = Matches<"(a)*", "c"> // false
```
Another example (the syntax is a bit heavy due to limitations of the current parser implementation):
```ts
type t1 = Matches<"((((a)(b))*)+(c))", "c"> // true
type t2 = Matches<"((((a)(b))*)+(c))", "ab"> // true
type t3 = Matches<"((((a)(b))*)+(c))", "abababab"> // true
type t4 = Matches<"((((a)(b))*)+(c))", "ababababab"> // true

type f1 = Matches<"((((a)(b))*)+(c))", "b"> // false
type f2 = Matches<"((((a)(b))*)+(c))", "ba"> // false
type f3 = Matches<"((((a)(b))*)+(c))", "ca"> // false
type f4 = Matches<"((((a)(b))*)+(c))", "ac"> // false
```