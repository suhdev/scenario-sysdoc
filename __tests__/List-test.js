jest.unmock('../es6/views/List');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {List,ListItem} from '../es6/views/List'; 

describe("Testing List component",function(){
    var items = [{
        label:'Item 1',
        key:'item1'
    },{
        label:'Item 2',
        key:'item2'
    },{
        label:'Item 3',
        key:'item3'
    }];
    
    it("Should render List component with items",function(){ 
        var obj = {
            onClick:function(e){
                
            }
        }
        spyOn(obj,'onClick').and.callThrough(); 

        const list = TestUtils.renderIntoDocument(
            <List onItemClick={obj.onClick} items={items} />
        );

        const listNode = ReactDOM.findDOMNode(list);
        
        const itms = TestUtils.scryRenderedComponentsWithType(list,ListItem);
        expect(itms.length).toEqual(3);
        // TestUtils.Simulate.click(itemNode,123);
        // expect(obj.onClick).toHaveBeenCalled();  
        
    });
    
    it("Should trigger on Click on the list items",function(){ 
        var obj = {
            onClick:function(e){
                
            }
        }
        spyOn(obj,'onClick').and.callThrough(); 
        const list = TestUtils.renderIntoDocument(
            <List onItemClick={obj.onClick} items={items} />
        );
        const listNode = ReactDOM.findDOMNode(list);
        const item =TestUtils.scryRenderedComponentsWithType(list,ListItem); 
        const itemNode = ReactDOM.findDOMNode(item[0]);
        
        TestUtils.Simulate.click(itemNode,123);
        expect(obj.onClick).toHaveBeenCalled();  
    });
    
    
    
    
});