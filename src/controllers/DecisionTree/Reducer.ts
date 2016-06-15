import {Action} from 'strikejs'; 
import {DECISION_TREE_START as START,START_MASK,ROLES} from '../../constants'; 
import {TYPES} from './Actions';
export function Reducer(state:Immutable.Map<string,any>,action:Action){
    let newState = state;
    let v = START_MASK & action.type;  

    if (v === START){
        switch(action.type){
            case TYPES.INIT:
            break;
            case TYPES.REQUIRES_BRAND:
            newState = newState.withMutations((m)=>{
                return m.set('level',action.data);
            });
            break;
            case TYPES.STAFF_LOADED:
            newState = newState.withMutations((m)=>{
                return m.set('staff',action.data);
            });
            break;
            case TYPES.STRATEGIC:
            newState = newState.withMutations((m)=>{
                return m.set('strategic',action.data);
            });
            break;
            case TYPES.COMPLEXITY:
            newState = newState.withMutations((m)=>{
                return m.set('complexity',action.data);
            });
            break;
            case TYPES.VALUE:
            newState = newState.withMutations((m)=>{
                return m.set('value',action.data);
            });
            break;
            case TYPES.NEXT_CARD:
            newState = newState.withMutations((m)=>{
                let v = newState.get('card');
                v += 1; 
                return m.set('card',v);
            });
            break;
            case TYPES.PREV_CARD:
            newState = newState.withMutations((m)=>{
                let v = newState.get('card');
                v -= 1; 
                return m.set('card',v);
            });
            break;
            case TYPES.FINISH:
            newState = newState.withMutations((m)=>{
                let staff = m.get('staff'),
                    isBrand = m.get('level') > 0,
                    isStrategic = m.get('strategic') > 0,
                    value = m.get('value'),
                    complexity = m.get('complexity');
                let technical = null,
                    brand = null,
                    roles = [];
                if (isStrategic || (value >= 1 && complexity > 1) || (value > 1 && complexity >= 1)){
                    technical = ROLES.HEAD_OF_TECHNICAL;
                }
                if (!technical){
                    if (value === 0 && complexity === 0){
                        technical = ROLES.TECHNICAL;
                    }else{
                        technical = ROLES.SENIOR_TECHNICAL; 
                    }
                }
                brand = isBrand?((technical & 0x0F)|0x20):null;
                roles = [technical,brand]; 
                m.set('filteredStaff',staff.filter((e)=>{
                    return roles.indexOf(e.role) !== -1;
                })).set('card',4);
            });
            break;
        }
    }

    return newState;
}