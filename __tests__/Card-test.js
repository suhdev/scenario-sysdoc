jest.unmock('../es6/views/Card');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Card} from '../es6/views/Card'; 

describe("Testing Card component",function(){
    
    it("Should attach onClick event to Card component",function(){ 
        var obj = {
            onClick:function(e){
                
            }
        }
        spyOn(obj,'onClick').and.callThrough(); 
        const card = TestUtils.renderIntoDocument(
            <Card label="Test Button" heading="Suhail">
                <div className="test-child">This is just a test</div>
            </Card>
        );
        const buttonNode = ReactDOM.findDOMNode(card);
        const labelNode = TestUtils.findRenderedDOMComponentWithClass(card,'of-card-label');
        const headingNode = TestUtils.findRenderedDOMComponentWithClass(card,'tree-heading');
        const testNode = TestUtils.findRenderedDOMComponentWithClass(card,'test-child');
        expect(headingNode.textContent).toEqual('Suhail');
        expect(labelNode.textContent).toEqual('Test Button');
        expect(testNode.textContent).toEqual('This is just a test');
        
    });    
    
});