import { Zero, One, RZero, ROne, RAtom, RSum, RSeq, RStar, Sigma } from "./Lang"

export type Reconstruct<R> =
  R extends RZero ? `(${Zero})`
  : R extends ROne ? `(${One})`
  : R extends RAtom<infer C> ? C extends Sigma ? `(${C})` : never
  : R extends RSum<infer F, infer G> ? `(${Reconstruct<F>}+${Reconstruct<G>})`
  : R extends RSeq<infer F, infer G> ? `(${Reconstruct<F>}${Reconstruct<G>})`
  : R extends RStar<infer F> ? `(${Reconstruct<F>}*)`
  : never;
