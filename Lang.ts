export type Zero = "∅";
export type One = "ε";
export type Sigma = "a" | "b" | "c" | "d" | "e" | "f" | "g";

export type RZero = { type: "zero" };
export type ROne = { type: "one" };
export type RChar<C> = { type: "char"; char: C };
export type RSum<F, G> = { type: "sum"; left: F; right: G };
export type RSeq<F, G> = { type: "seq"; left: F; right: G };
export type RStar<F> = { type: "star"; r: F };
