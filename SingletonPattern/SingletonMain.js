
/******************************************************************************************************
* @purpose  :  Design a singleton design pattern for a booky persons performs various actions.
* 	
*  @Auther   : Shubham
*  @File     : SingletonPatternMain.js 
*  
************************************************************************************************/

const LifeImp = require('./SingletonBusiness')

let islife = LifeImp.Life.getInstance();
islife.Laptop();
islife.Mobile();
islife.Watch();