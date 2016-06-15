jest.unmock('../es6/services/DataStore');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as firebase from 'firebase';
import {DataStore} from '../es6/services/DataStore'; 

describe("Testing DataStore service",function(){
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
    
    it("Should create new instance of DataStore",function(){ 
        const store = new DataStore(firebase,{
            serviceAccount:{
                "projectId": "project-7706350799177221098",
                "clientEmail": "sysdoc@project-7706350799177221098.iam.gserviceaccount.com",
                "privateKey": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCSvEBpbhIKyBc8\nOrLMQE+wmv1zJ/s6+LxcpS0cqPzN56lGK/uHylODCKqPOn1d+O4VlGK5lTBzVeE/\nQwTqMBbV7lWzEzfgJ9jECFM7rm4pi+uEDn31QHk1rzar7vB6dK4JiprS92x8OaRk\n5NrhiQCoI4TJv6hUJx6dRbhiad6uVI8PmQCoe508jKOU7LhzW1/ASJEcMffMMxCs\n+Pg4EWWeMkPxMt1XUM2sgJjOfZpCyAE3RHLVULCModJ8BX//fVTmFOwGllvswTLg\nvg3OSS+kz8fqFICOjba+LvwWwQoUJCcn7cNUDrclf5Brc9cKcNt8UkExz+Z+zrXC\nElJkzGIzAgMBAAECggEAIabWxtcdgCd/XKrBkqI1JHWHJr/GmDGvUTf4bpg60iYM\n5jD0EKJQIL7+DrcFRWXvhDdxpMoYQHszm0SNff/lXM66DMWdjOTWi661F/za+uBB\n9Rk1vec5ZRx311qHAC5+M2X8N+HSmXLGxvTNVegLpIPw0iwIOLR4Cu2QadGJ5kTW\nHTWOFCK6rUTItUYCmHa6K9aZqyfQBGYmdR1G9Ad1KUD6Yfd1TVqPp0phAjg7DuM7\n+eDGLvvhHz7+uyH1ilp65EstVPh/N7ST6RI08n/AYevtcTKto0pQdywtx1U+roBR\n5b3Dk9tnfJuGvKCmfw/h1QiKfBtXL+ABdZ1N9LP+QQKBgQD9v1RS6FLoSm+DkjRY\neLBs6/AO9wCpJW0wP0AEKHYD5GRGxLU73ajrf9S93GO4cOMHeWVkeZN7PVBJ8VIh\nsJKanBvBZc0Amq9srVzX8UGGkgtdIVUFeNFFEt+j6wF5uM8dW2XIDNIFkMhn3cb7\n5uGLwwSM1oh3AWsXZUVaxyBIsQKBgQCUCbmRjMZhfG18OWH0J5x+fLeGTi6P4fm1\nlkx0XMH1FGpsLRtMBp6z6p5Kzj5PY3vwFRDBlFq5U9AndCv7V/GfKO3LjLDlCvHc\nlmfAJ/YiyzmcvRh6m8iTTN7G22e1oOBS+E+MD9SRSXK7ispE6o/xhJkqykzumbYI\nnkuG3CYSIwKBgQC8JK5QXuSCShbPFovrgWlHCdXQMsLxp8eC+5Lqwllm32SeuGGs\nxtjl7L2AHTZvXnxnYVKVojOBMGAkw2LjifnZ26AU0Pek2Az0ZsKtdrvgHM+COSHC\nUefQ8IKUFr7cUvR2zvrzztW2vLhrkxxkULexmmL4TmWW351ZFoTLH1RHsQKBgB4k\n8M2LjeXR8XVnNeQCoOI8wR4vE1onGLL6PO1A6hneo2ENuk471tsp/jubTaLaziTw\nFS5l6CduwqcWB9KxcLkJG4rkRi0NknxpgAzn1j31hfC9rJti12/vKjnx+WdJsAQV\nHhWWL6G6BAveUhvAa7kxWAMXmJzJXgDZQuXeND5jAoGAA2cYXEM8cyYDrVySUywZ\nRcA0/NMHBE5Nyq6CcP0PPiPdwbDTogJLgMBzZuZgrcVF9K2IZRDAi5RzB8NKMp+n\nzCR3VVu3ac88nbUCpKS12sihTEVq0X2kWx9hxikgpg/C+Mh8Ouv2QB7ldPOmA4hW\nLfKEo78qtehXJIV8NkpIPQA=\n-----END PRIVATE KEY-----\n",
            },
            databaseURL:"https://project-7706350799177221098.firebaseio.com",
            
        }); 
        var obj = {
            onLoad:function(e){
                console.log(e);
            }
        }; 
        
        expect(store).toBeDefined();
        expect(store.database).toBeDefined();
        
        
    });    
    
});