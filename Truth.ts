export type Equal<A, B> = A extends B ? B extends A ? true : false : false;
