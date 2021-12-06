import { Match } from "./Match";
import { Parse } from "./Parse";
import { Reconstruct } from "./Reconstruct";

type AssertEqual<A, B> = A extends B ? B extends A ? true : false : false;
type AssertNotEqual<A, B> = A extends B ? false : true;

type r = "((((a)(b))*)+(a))";
type f = "((((c)*)(((a)(b))*))*)";

const t1: AssertNotEqual<Parse<r>, never> = true;
const t2: AssertNotEqual<Parse<f>, never> = true;

const t4: AssertEqual<Reconstruct<Parse<r>>, r> = true;
const t3: AssertEqual<Reconstruct<Parse<f>>, f> = true;

const t5: AssertEqual<Parse<"abc">, "Invalid input"> = true;
const t6: AssertEqual<Parse<"(aa)">, "Invalid input"> = true;
const t7: AssertEqual<Parse<"(a)bbbb">, "Invalid input"> = true;

const t8: AssertNotEqual<Parse<r>, "Invalid input"> = true;
const t9: AssertNotEqual<Parse<f>, "Invalid input"> = true;

const t10: Match<Parse<r>, "a"> = true;
const t11: Match<Parse<r>, "b"> = false;
const t12: Match<Parse<r>, "c"> = false;
const t13: Match<Parse<r>, "d"> = false;
const t14: Match<Parse<r>, "ab"> = true;
const t15: Match<Parse<r>, "aba"> = false;
const t16: Match<Parse<r>, "abab"> = true;

const t17: Match<Parse<f>, "a"> = false;
const t18: Match<Parse<f>, "b"> = false;
const t19: Match<Parse<f>, "c"> = true;
const t20: Match<Parse<f>, "cc"> = true;
const t21: Match<Parse<f>, "ccc"> = true;
const t22: Match<Parse<f>, "cccc"> = true;
const t23: Match<Parse<f>, "cca"> = false;
const t24: Match<Parse<f>, "ccb"> = false;
const t25: Match<Parse<f>, "ccab"> = true;
const t26: Match<Parse<f>, "ccabab"> = true;
const t27: Match<Parse<f>, "cababc"> = true;
