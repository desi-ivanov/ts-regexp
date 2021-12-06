import { Sigma, Zero, One, RStar, RSum, RSeq, RZero, ROne, RAtom } from "./Lang";

export type ParseM<S> = S extends ""
  ? [{ type: "end" }, ""]
  : S extends `(${infer Rest}`
  ? ParseM<Rest> extends [infer Left, infer Remain]
    ? Remain extends `)${infer Rest2}`
      ? Rest2 extends ""
        ? [Left, ""]
        : Rest2 extends `*${infer Rest3}`
        ? [RStar<Left>, Rest3]
        : Rest2 extends `+${infer Rest3}`
        ? ParseM<Rest3> extends [infer Right, infer Remain2]
          ? [RSum<Left, Right>, Remain2]
          : never
        : Rest2 extends `(${infer _}`
        ? ParseM<Rest2> extends [infer Right, infer Remain2]
          ? [RSeq<Left, Right>, Remain2]
          : never
        : [Left, Rest2]
      : never
    : never
  : S extends `${infer c}${infer Rest}`
  ? c extends Sigma
    ? [RAtom<c>, Rest]
    : c extends Zero
    ? [RZero, Rest]
    : c extends One
    ? [ROne, Rest]
    : c extends ")"
    ? [{ type: "end" }, S]
    : never
  : never;

export type Parse<S> = ParseM<S> extends [infer T, infer Remain]
  ? Remain extends ""
    ? T
    : "Invalid input"
  : "Parser failed";
