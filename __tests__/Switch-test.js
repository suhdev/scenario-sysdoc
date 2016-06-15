jest.unmock('../es6/views/Switch');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Switch,SwitchItem} from '../es6/views/Switch'; 

describe("Testing Switch component",function(){
    const items = [{
        key:'item1',
        label:"Item 1"
    },{
        key:'item2',
        label:"Item 2"
    },{
        key:'item3',
        label:"Item 3"
    }];
    
    it("Should render Switch component",function(){ 
        var obj = {
            onChange:function(e){
                
            }
        }
        spyOn(obj,'onChange').and.callThrough(); 
        const sw = TestUtils.renderIntoDocument(
            <Switch className="my-switch" onChange={obj.onChange} states={items} />
        );
        const swNode = ReactDOM.findDOMNode(sw);
        expect(/.*my\-switch/.test(swNode.className)).toBe(true);
        const item =TestUtils.scryRenderedComponentsWithType(sw,SwitchItem);
        expect(item.length).toEqual(3);
        
    });
    
    it("Should change state when a state is clicked",function(){
        var obj = {
            onChange:function(e){
                
            }
        }
        spyOn(obj,'onChange').and.callThrough(); 
        const sw = TestUtils.renderIntoDocument(
            <Switch className="my-switch" onChange={obj.onChange} states={items} />
        );
        const item = TestUtils.scryRenderedComponentsWithType(sw,SwitchItem);
        expect(item.length).toEqual(3);
        const itmNode = ReactDOM.findDOMNode(item[0]);
        TestUtils.Simulate.click(itmNode,123);  
        expect(obj.onChange).toHaveBeenCalled();
    });
    
    
    
});