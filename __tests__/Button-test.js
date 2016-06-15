jest.unmock('../es6/views/Button');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Button} from '../es6/views/Button'; 

describe("Testing Button component",function(){
    
    it("Should attach onClick event to Button component",function(){ 
        var obj = {
            onClick:function(e){
                
            }
        }
        spyOn(obj,'onClick').and.callThrough(); 
        const button = TestUtils.renderIntoDocument(
            <Button className="my-button" label="Test Button" onClick={obj.onClick}/>
        );
        const buttonNode = ReactDOM.findDOMNode(button);
        TestUtils.Simulate.click(buttonNode,123);
        expect(obj.onClick).toHaveBeenCalled();  
        
    });
    
    it("Should pass userData to the onClick handler",function(){ 
        var userData = {
            firstName:'John',
            lastName:'Doe', 
        },fnResult = null; 
        var obj = {
            onClick:function(e){
                fnResult = e;
            }
        }
        spyOn(obj,'onClick').and.callThrough(); 
        const button = TestUtils.renderIntoDocument(
            <Button className="my-button" label="Test Button" userData={userData} onClick={obj.onClick}/>
        );
        const buttonNode = ReactDOM.findDOMNode(button);
        TestUtils.Simulate.click(buttonNode,{});
        expect(obj.onClick).toHaveBeenCalled();
        expect(fnResult).toEqual(userData);  
    });
    
    it("Should render icon through",function(){ 
        var userData = {
            firstName:'John',
            lastName:'Doe', 
        },fnResult = null; 
        var obj = {
            onClick:function(e){
                fnResult = e;
            }
        }
        spyOn(obj,'onClick').and.callThrough(); 
        const button = TestUtils.renderIntoDocument(
            <Button className="my-button" label="Test Button" userData={userData} onClick={obj.onClick}/>
        );
        const buttonNode = ReactDOM.findDOMNode(button);
        TestUtils.Simulate.click(buttonNode,{});
        expect(obj.onClick).toHaveBeenCalled();
        expect(fnResult).toEqual(userData);  
    });
    
    
});