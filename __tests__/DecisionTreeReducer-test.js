jest.unmock('../es6/controllers/DecisionTree/Reducer');
jest.unmock('../es6/controllers/DecisionTree/Actions');

import React from 'react';
import ReactDOM from 'react-dom';
import * as Immutable from 'immutable';
import TestUtils from 'react-addons-test-utils';
import {ACTIONS} from '../es6/controllers/DecisionTree/Actions'; 
import {Reducer} from '../es6/controllers/DecisionTree/Reducer'; 

describe("Testing DecisionTree Reducer",function(){
    
    it("Should respond to STAFF_LOADED action",function(){ 
        let state = Immutable.Map({staff:[]});

        let newState = Reducer(state,ACTIONS.STAFF_LOADED([{
            name:'Suhail',
            role:2
        }]));
        expect(newState.get('staff').length).toEqual(1);
  
    });

    it("Should respond to REQUIRES_BRAND action",function(){ 
        let state = Immutable.Map({staff:[]});

        let newState = Reducer(state,ACTIONS.REQUIRES_BRAND(2));
        expect(newState.get('level')).toEqual(2);
  
    });

    it("Should respond to STRATEGIC action",function(){ 
        let state = Immutable.Map({staff:[]});

        let newState = Reducer(state,ACTIONS.STRATEGIC(4));
        expect(newState.get('strategic')).toEqual(4);
  
    });

    it("Should respond to VALUE action",function(){ 
        let state = Immutable.Map({staff:[]});

        let newState = Reducer(state,ACTIONS.VALUE(4));
        expect(newState.get('value')).toEqual(4);
  
    });

     it("Should respond to COMPLEXITY action",function(){ 
        let state = Immutable.Map({staff:[]});

        let newState = Reducer(state,ACTIONS.COMPLEXITY(10));
        expect(newState.get('complexity')).toEqual(10);
  
    });

    it("Should respond to NEXT_CARD action",function(){ 
        let state = Immutable.Map({card:0});

        let newState = Reducer(state,ACTIONS.NEXT_CARD);
        expect(newState.get('card')).toEqual(1);
  
    });

    it("Should respond to PREV_CARD action",function(){ 
        let state = Immutable.Map({card:2});

        let newState = Reducer(state,ACTIONS.PREV_CARD);
        expect(newState.get('card')).toEqual(1);
  
    });

    it("Should respond to FINISH action for head of technical",function(){ 
        let state = Immutable.Map({
            level:0,
            filteredStaff:[],
            complexity:0,
            value:2,
            strategic:1,
            staff:[ {
                "name" : "Head of Tech",
                "role" : 24,
                "roleLabel" : "Head of Technical Solutions"
            }, {
                "name" : "Senior Tech",
                "role" : 20,
                "roleLabel" : "Senior Technical Consultant"
            },  {
                "name" : "Tech",
                "role" : 18,
                "roleLabel" : "Technical Consultant"
            },  {
                "name" : "Head of Brand",
                "role" : 40,
                "roleLabel" : "Head of Brand"
            }, {
                "name" : "Senior Brand",
                "role" : 36,
                "roleLabel" : "Senior Brand Consultant"
            }, {
                "name" : "Brand",
                "role" : 34,
                "roleLabel" : "Brand Consultant"
            }],
        });

        let newState = Reducer(state,ACTIONS.FINISH);
        expect(newState.get('filteredStaff').length).toEqual(1);
        expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 24;
        }).length).toEqual(1);
  
    });

    it("Should respond to FINISH action for strategic and with brand",function(){ 
        let state = Immutable.Map({
            level:1,
            filteredStaff:[],
            complexity:0,
            value:2,
            strategic:1,
            staff:[ {
                "name" : "Head of Tech",
                "role" : 24,
                "roleLabel" : "Head of Technical Solutions"
            }, {
                "name" : "Senior Tech",
                "role" : 20,
                "roleLabel" : "Senior Technical Consultant"
            },  {
                "name" : "Tech",
                "role" : 18,
                "roleLabel" : "Technical Consultant"
            },  {
                "name" : "Head of Brand",
                "role" : 40,
                "roleLabel" : "Head of Brand"
            }, {
                "name" : "Senior Brand",
                "role" : 36,
                "roleLabel" : "Senior Brand Consultant"
            }, {
                "name" : "Brand",
                "role" : 34,
                "roleLabel" : "Brand Consultant"
            }],
        });

        let newState = Reducer(state,ACTIONS.FINISH);
        expect(newState.get('filteredStaff').length).toEqual(2);
        expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 24;
        }).length).toEqual(1);
         expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 40;
        }).length).toEqual(1);
  
    });

    it("Should respond to FINISH action with no brand but value 1",function(){ 
        let state = Immutable.Map({
            level:0,
            filteredStaff:[],
            complexity:0,
            value:1,
            strategic:0,
            staff:[ {
                "name" : "Head of Tech",
                "role" : 24,
                "roleLabel" : "Head of Technical Solutions"
            }, {
                "name" : "Senior Tech",
                "role" : 20,
                "roleLabel" : "Senior Technical Consultant"
            },  {
                "name" : "Tech",
                "role" : 18,
                "roleLabel" : "Technical Consultant"
            },  {
                "name" : "Head of Brand",
                "role" : 40,
                "roleLabel" : "Head of Brand"
            }, {
                "name" : "Senior Brand",
                "role" : 36,
                "roleLabel" : "Senior Brand Consultant"
            }, {
                "name" : "Brand",
                "role" : 34,
                "roleLabel" : "Brand Consultant"
            }],
        });

        let newState = Reducer(state,ACTIONS.FINISH);
        expect(newState.get('filteredStaff').length).toEqual(1);
        expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 20;
        }).length).toEqual(1);
        
  
    });

    it("Should respond to FINISH action with brand but value 1",function(){ 
        let state = Immutable.Map({
            level:1,
            filteredStaff:[],
            complexity:0,
            value:1,
            strategic:0,
            staff:[ {
                "name" : "Head of Tech",
                "role" : 24,
                "roleLabel" : "Head of Technical Solutions"
            }, {
                "name" : "Senior Tech",
                "role" : 20,
                "roleLabel" : "Senior Technical Consultant"
            },  {
                "name" : "Tech",
                "role" : 18,
                "roleLabel" : "Technical Consultant"
            },  {
                "name" : "Head of Brand",
                "role" : 40,
                "roleLabel" : "Head of Brand"
            }, {
                "name" : "Senior Brand",
                "role" : 36,
                "roleLabel" : "Senior Brand Consultant"
            }, {
                "name" : "Brand",
                "role" : 34,
                "roleLabel" : "Brand Consultant"
            }],
        });

        let newState = Reducer(state,ACTIONS.FINISH);
        expect(newState.get('filteredStaff').length).toEqual(2);
        expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 20;
        }).length).toEqual(1);
        expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 36;
        }).length).toEqual(1);
        
  
    });

    it("Should respond to FINISH action with no brand but value 1 and complexity 1",function(){ 
        let state = Immutable.Map({
            level:0,
            filteredStaff:[],
            complexity:1,
            value:1,
            strategic:0,
            staff:[ {
                "name" : "Head of Tech",
                "role" : 24,
                "roleLabel" : "Head of Technical Solutions"
            }, {
                "name" : "Senior Tech",
                "role" : 20,
                "roleLabel" : "Senior Technical Consultant"
            },  {
                "name" : "Tech",
                "role" : 18,
                "roleLabel" : "Technical Consultant"
            },  {
                "name" : "Head of Brand",
                "role" : 40,
                "roleLabel" : "Head of Brand"
            }, {
                "name" : "Senior Brand",
                "role" : 36,
                "roleLabel" : "Senior Brand Consultant"
            }, {
                "name" : "Brand",
                "role" : 34,
                "roleLabel" : "Brand Consultant"
            }],
        });

        let newState = Reducer(state,ACTIONS.FINISH);
        expect(newState.get('filteredStaff').length).toEqual(1);
        expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 20;
        }).length).toEqual(1);
       
        
  
    });

    it("Should respond to FINISH action with brand but value 1 and complexity 1",function(){ 
        let state = Immutable.Map({
            level:1,
            filteredStaff:[],
            complexity:1,
            value:1,
            strategic:0,
            staff:[ {
                "name" : "Head of Tech",
                "role" : 24,
                "roleLabel" : "Head of Technical Solutions"
            }, {
                "name" : "Senior Tech",
                "role" : 20,
                "roleLabel" : "Senior Technical Consultant"
            },  {
                "name" : "Tech",
                "role" : 18,
                "roleLabel" : "Technical Consultant"
            },  {
                "name" : "Head of Brand",
                "role" : 40,
                "roleLabel" : "Head of Brand"
            }, {
                "name" : "Senior Brand",
                "role" : 36,
                "roleLabel" : "Senior Brand Consultant"
            }, {
                "name" : "Brand",
                "role" : 34,
                "roleLabel" : "Brand Consultant"
            }],
        });

        let newState = Reducer(state,ACTIONS.FINISH);
        expect(newState.get('filteredStaff').length).toEqual(2);
        expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 20;
        }).length).toEqual(1);
        expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 36;
        }).length).toEqual(1);
        
  
    });

    it("Should respond to FINISH action with no brand but value 0 and complexity 0",function(){ 
        let state = Immutable.Map({
            level:0,
            filteredStaff:[],
            complexity:0,
            value:0,
            strategic:0,
            staff:[ {
                "name" : "Head of Tech",
                "role" : 24,
                "roleLabel" : "Head of Technical Solutions"
            }, {
                "name" : "Senior Tech",
                "role" : 20,
                "roleLabel" : "Senior Technical Consultant"
            },  {
                "name" : "Tech",
                "role" : 18,
                "roleLabel" : "Technical Consultant"
            },  {
                "name" : "Head of Brand",
                "role" : 40,
                "roleLabel" : "Head of Brand"
            }, {
                "name" : "Senior Brand",
                "role" : 36,
                "roleLabel" : "Senior Brand Consultant"
            }, {
                "name" : "Brand",
                "role" : 34,
                "roleLabel" : "Brand Consultant"
            }],
        });

        let newState = Reducer(state,ACTIONS.FINISH);
        expect(newState.get('filteredStaff').length).toEqual(1);
        expect(newState.get('filteredStaff').filter(function(e){
            return e.role === 18;
        }).length).toEqual(1);
    
  
    });
    
   
    
    
});