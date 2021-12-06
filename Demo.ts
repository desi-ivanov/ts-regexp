import { Match } from "./Match";
import { Parse } from "./Parse";

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

