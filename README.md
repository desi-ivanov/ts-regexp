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
Given a regular expression `((((a)(b))*)+(a))` (which is `(ab)* + a` with simplified syntax), TypeScript determines that the regular expression matches the strings `a`, `ab`, `abababab`, `ababababab`, and doesn't match the strings `b` ,`ba` ,`baa` ,`baaa`:
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

## Demo
Try it out in the [TS playground](https://www.typescriptlang.org/play?#code/KYDwDg9gTgLgBDAnmYcBawoTgXjgIkFAifAbgChRJYFlUB5AO1T30FbgUi8aeJFOAZQCWAcwC2AQ1wFx+OAB8CAI1kL8AYxUEAJpvzBdAM13COnKj1pwAShixSA3jRQAuAgC9MEWQF9ylbk6oVozMcI68wK74EEw+flzUEdYAgjAQogA8AMIAfA6BUWoAFuJQpHDFpa5ZcL5mAUlW-ACumQBiADRwAOJ5eOG0UQDOreUANsAGMK5tJHBQIkXTPbXx5oHW-MAAjhmdPX1hBQRDO+OTy7Pzi8vdq-WJlk0wpXuHAy4nL2VzUDP3DwsfAACqVTgBZDL8Q78OCgGDABhaIZwAAGAAoACT2QQMAyYazAIYwbyoshwOAAfjgoKgEIyViJMDy8MRyLgAG1cfioHAADIXLrcgmMiS4gC65IpVMJYoYcJACKRKNRAEpscLeYziQAmUlS6Uy7UwHUKpXs-D4A2GmUcgVTLqWyU26WuY2m1nKtEAKg1eJFTIAzPqXRTqRznq97cyusbA87Q26mR7FWyVQBqP08wnE4Nk0My2n0uMs1Nern+rU3IWV2XiXE6hMF8NNVoZaOxm45WPAOWN60u1xMABumAHrpzJrNabRWJxtYA+iHQ9Si8BIe7S+aURXs1Zq3BNXWG02V5ymjt24LrF2e33T4O4COxwXXHbr+6H3Ah8BR1BrT+f5Sq4sKeuyqJZgSajeJBWpMsu1JqNOXpCGI4jWi2qTpBkajdpOp6uEhYEorYEAYeepE9sSBEVMh7IhOREYhFRMA0c+-4UoBmDkICGxrlChxrpC0J0TuR4ACo1nuvb1gwCbUqKsmiQQVqGtS4kAQQACSDDDuIYyCFoh4MGAzQwKp34EGuvIGPWEw6Dx-iPHwAByzRjGM4iKBMDKHFYyk2J4UrUrZYynMB1gBQxYYIFAzTABF-nESkaSZEeC45MFcCheFnGRclrZpbW+xHr0WVuR5Xk+W0W4zjAcUJWpsXxZpFWed5wAZGVeVJWW7IXrsR4lbW3Uym1VWdTVyn1S1TXjR1XW1V6M2NTa1IreOrg5ateXbYlAX8N8GTpZlMUbXl7GOQkQKoAAIpggijgyXQABrKahEiHPNPlWEt7LsVlAM9QFpFZYFWD7QV0VGqDwMFVhRXZrkWVvclWTkcETCaeDZFw31KKFcdxVSQSo0KS0mT3QsT37C9eFU49nXdK9OSnZZvXbpsl5DSTvJk3A32TX9KLndK5NtgNGQMzTLNdL0XTS0zLNsz1Wy7IreyywckP45sR1DWz5OXhrtN4b9EWXWQvFJOC4gwMUz1wHTUio7rlrle57U-Wzriu5zEHzkjMGBwSWT8AhcA1MlH3oU1tv20UUsPU9VhdLkafQppQOWZbZBJFAACMUj8fg6Jl+i4iquiiiqqq3qqumFe1-gOQ8WoMTEggBeuPHDuF46MiHCt5Dtwwncmj3dt9wXA-KEPDUjx3PCBpPCcZP30iKF529z1Iw9kKP48ACyr9Ps87zvLd7wvVuH-ABjd3AveJxv+C73g22L2P986qfL8z0oQeUhP4HyXtlFeT8p7-0dFvIBH99KnC-p3AwJ9IFr1frAuB2UEHAB4vnU0eAS7l0rtXWujc1DN1blbMgAB6GhPRGbykkFAYAwh3KlAVGAFhQwhiCBiHAYhVca4N3RBQ1UXQADuRRBDFEPCiCuNc4DplohIwQMAihwF4aIMABkDCCGAEZIYiAGAvBAF0Wh9D1GoGJAsBgwg4CKDgFoCARInwQHgIoYAYwYj2LSAgIoqBPJ2OaOIYQqAIAGH8agFhbDPK8koNw3hMQAB0cALFwB0tgtQMAujiVoPwNQCwwDwF-PpEJCIRYlHgM-DIRCy4kOEeQyhMCr6CBRNtVJ6TxIBJYQYaAwAujiB4SIBguJ7GSD0mMeKzVUB+ImaUQQE04ARI2DUupTdSEiLES3FpeR0ltLgBIrAdi4DiCRFEwIABaYowA1AAGsCS2UEGFU55z1FYAkSiPJfAADkK0flyLcfAIZvDhAMCWX4pIPzto-K6ZYP5DUAUHIYO405wywUQuwFCmF6T0nNAYO3UQohEQ8ACdlCAHkICqJOQZJgCBsCnFQGo9Jd84RQD+Ggh26yGlkNEc0pQV88DDzSUAA)
