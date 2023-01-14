import { Parse } from "./Parse";
import { Matches } from "./Util";


type t1 = Matches<"((((a)(b))*)+(c))", "c"> // true
type t2 = Matches<"((((a)(b))*)+(c))", "ab"> // true
type t3 = Matches<"((((a)(b))*)+(c))", "abababab"> // true
type t4 = Matches<"((((a)(b))*)+(c))", "ababababab"> // true

type f1 = Matches<"((((a)(b))*)+(c))", "b"> // false
type f2 = Matches<"((((a)(b))*)+(c))", "ba"> // false
type f3 = Matches<"((((a)(b))*)+(c))", "ca"> // false
type f4 = Matches<"((((a)(b))*)+(c))", "ac"> // false

type t5 = Matches<"(a)*", ""> // true
type t6 = Matches<"(a)*", "a"> // true
type t7 = Matches<"(a)*", "aa"> // true
type t8 = Matches<"(a)*", "aaa"> // true
type t9 = Matches<"(a)*", "aaaa"> // true

type f5 = Matches<"(a)*", "b"> // false
type f6 = Matches<"(a)*", "ba"> // false
type f7 = Matches<"(a)*", "c"> // false


type r2 = Parse<"(((a)(b))+(c))">;

