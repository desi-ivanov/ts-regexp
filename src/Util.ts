import { Match } from "./Match";
import { Parse } from "./Parse";

export type Matches<RawR, X> = Match<Parse<RawR>, X>;
