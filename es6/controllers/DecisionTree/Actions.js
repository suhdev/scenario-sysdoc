import { DECISION_TREE_START as START } from '../../constants';
/**
 * The types of actions that can happen within a {DecisionTree} controller.
 * Note: the {START} mask is used to scope controllers, this is a good practice
 * specially when there are more than one controller in the application.
 * Scoping controllers helps in optimising Reducers in Redux-like applications.
 */
export const TYPES = {
    INIT: START | 0x000001,
    STAFF_LOADED: START | 0x000002,
    REQUIRES_BRAND: START | 0x000003,
    STRATEGIC: START | 0x000004,
    VALUE: START | 0x000005,
    COMPLEXITY: START | 0x000006,
    NEXT_CARD: START | 0x000007,
    PREV_CARD: START | 0x000008,
    FINISH: START | 0x000009,
};
/**
 * The actions that user interaction can trigger within the applications.
 */
export const ACTIONS = {
    /**
     * Triggered upon completion of initial mount of the root React component.
     */
    INIT: {
        type: TYPES.INIT,
        data: {}
    },
    /**
     * Triggered when staff members data are loaded from firebase.
     *
     * @param {StaffMember[]} staff the staff members loaded from firebase.
     * @returns Action
     */
    STAFF_LOADED: function (staff) {
        return {
            type: TYPES.STAFF_LOADED,
            data: staff
        };
    },
    /**
     * Triggered when the end user interaction switch state changes.
     * @param {number} idx the index of the switch state.
     */
    REQUIRES_BRAND: function (idx) {
        return {
            type: TYPES.REQUIRES_BRAND,
            data: idx
        };
    },
    /**
     * Triggered when the strategic switch state changes.
     * @param {number} idx the index of the switch state.
     */
    STRATEGIC: function (idx) {
        return {
            type: TYPES.STRATEGIC,
            data: idx
        };
    },
    /**
     * Triggered when the value switch state changes.
     * @param {number} idx the index of the switch state.
     */
    VALUE: function (idx) {
        return {
            type: TYPES.VALUE,
            data: idx,
        };
    },
    /**
     * Triggered when the complexity switch state changes.
     * @param {number} idx the index of the switch state.
     */
    COMPLEXITY: function (idx) {
        return {
            type: TYPES.COMPLEXITY,
            data: idx
        };
    },
    /**
     * Triggered when the user clicks on Next on any of the cards
     * within the {DecisionTree} controller.
     */
    NEXT_CARD: {
        type: TYPES.NEXT_CARD,
        data: {}
    },
    /**
      * Triggered when the user clicks on Prev on any of the cards
      * within the {DecisionTree} controller.
      */
    PREV_CARD: {
        type: TYPES.PREV_CARD,
        data: {}
    },
    /**
     * Triggered when the user clicks on Finish on the final card
     * within the {DecisionTree} controller.
     */
    FINISH: {
        type: TYPES.FINISH,
        data: {}
    }
};
