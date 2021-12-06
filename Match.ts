import { RChar, ROne, RSeq, RStar, RSum, RZero, Sigma } from "./Lang";

export type Nullable<R> = R extends RZero
  ? false
  : R extends ROne
  ? true
  : R extends RChar<infer _>
  ? false
  : R extends RSum<infer F, infer G>
  ? Nullable<F> extends true
    ? true
    : Nullable<G>
  : R extends RSeq<infer F, infer G>
  ? Nullable<F> extends true
    ? Nullable<G> extends true
      ? true
      : false
    : false
  : R extends RStar<infer _>
  ? true
  : never;

export type Derive<R, X extends Sigma> = Nullable<R> extends never
  ? never
  : R extends RZero
  ? RZero
  : R extends ROne
  ? RZero
  : R extends RChar<infer C>
  ? X extends C
    ? ROne
    : RZero
  : R extends RSum<infer F, infer G>
  ? RSum<Derive<F, X>, Derive<G, X>>
  : R extends RSeq<infer F, infer G>
  ? Nullable<F> extends true
    ? RSum<RSeq<Derive<F, X>, G>, Derive<G, X>>
    : RSeq<Derive<F, X>, G>
  : R extends RStar<infer F>
  ? RSeq<Derive<F, X>, R>
  : never;

export type Match<R, X> = X extends ""
  ? Nullable<R>
  : X extends `${infer C}${infer CS}`
  ? C extends Sigma
    ? Match<Derive<R, C>, CS>
    : never
  : never;
