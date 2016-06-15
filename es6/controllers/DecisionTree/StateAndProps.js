export const STATE_KEY = 'decisionTree';
export const START = 0x100000;
export const MAZE = 0x10000000;
export const LEVEL_MASK_BITS = 0x00000003;
export const STRATEGIC_MASK_BITS = 0x00000030;
export const VALUE_MASK_BITS = 0x00000700;
export const COMPLEXITY_MASK_BITS = 0x00007000;
export const HEAD_MASK = 0x0000;
export const HEAD_OF_TECH_MASK = 0x00006623;
export const HEAD_OF_BRAND_MASK = 0x00006622;
export const SENIOR_TECH_MASK = 0x00003313;
export const SENIOR_BRAND_MASK = 0x00003312;
export const TECH_MASK = 0x00001113;
export const BRAND_MASK = 0x00001112;
export const DecisionTreeInitialState = {
    card: 0,
    level: 0,
    value: 0,
    complexity: 0,
    strategic: 0,
    staff: [],
    filteredStaff: [],
};
