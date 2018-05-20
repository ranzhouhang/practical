'use strict';
const median=require('../main/main(en).js');
//两个例子：
//const mike='mike,04151812,班级03,math:88,English:75,Chinese:86,programme:82';
//const jan='jan,05181716,班级05,math:99,English:98,Chinese:98,programme:99';

describe('main',() =>{
    
    it ('函数的准确性',()=>{
        const array=[1,5,8,7,6,3,2];
        const result=median(array);
        expect(result).toEqual('5');

    })
})