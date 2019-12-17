import { Action } from '@ngrx/store';

export const INTERESTED = '[DogLike] Interested';
export const NOTINTERESTED = '[DogLike] Notinterested';
export const RESET = '[DogLike] Reset';

export class Interested implements Action {
    readonly type = INTERESTED;
}

export class Notinterested implements Action {
    readonly type = NOTINTERESTED;
}

export class Reset implements Action {
    readonly type = RESET;
}


//sett to a single type so that they can be easily added by a strong type.
export type All
= Interested
| Notinterested
| Reset;