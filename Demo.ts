import { Accepts } from "./Match";
import { Parse } from "./Parse";

type r1 = Parse<"((((a)(b))*)+(a))">;
type t1 = Accepts<r1, "a">; // expected type: true
type t2 = Accepts<r1, "ab">; // expected type: true
type t3 = Accepts<r1, "abababab">; // expected type: true
type t4 = Accepts<r1, "ababababab">; // expected type: true

type f1 = Accepts<r1, "b">; // expected type: false
type f2 = Accepts<r1, "ba">; // expected type: false
type f3 = Accepts<r1, "baa">; // expected type: false
type f4 = Accepts<r1, "baaa">; // expected type: false