import { DECREASE_COUNTER, INCREASE_COUNTER } from "../constants/test";

export const increaseCounter = () => ({
    type: INCREASE_COUNTER
});

export const decreaseCounter = () => ({
    type: DECREASE_COUNTER
});