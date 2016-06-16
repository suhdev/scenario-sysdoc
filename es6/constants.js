/**
 * In big ReactJS applications, multiple controller components can co-exist.
 * Using binary operations, to mask specific bits allows for better performance in Reducer functions.
 * Please see Reducer.tsx.
 */
export const START_MASK = 0xF00000;
/**
 * Marks the start field of the DecisionTree controller component.
 */
export const DECISION_TREE_START = 0x100000;
/**
 * The available states for yes/no switch components.
 */
export const SOLUTION_TYPE_STATES = [{
        key: 'no',
        label: 'No'
    }, {
        key: 'yes',
        label: 'Yes'
    }];
/**
 * The available states for value and complexity switch components.
 */
export const SOLUTION_VALUE_LEVELS = [{
        key: 'low',
        label: 'Low'
    }, {
        key: 'medium',
        label: 'Medium'
    }, {
        key: 'high',
        label: 'High'
    }];
/**
 * The different roles that are available in the application.
 */
export const ROLES = {
    HEAD_OF_TECHNICAL: 0x18,
    SENIOR_TECHNICAL: 0x14,
    TECHNICAL: 0x12,
    HEAD_OF_BRAND: 0x28,
    SENIOR_BRAND: 0x24,
    BRAND: 0x22
};
