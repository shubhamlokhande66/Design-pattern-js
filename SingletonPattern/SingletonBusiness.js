/******************************************************************************************************
* @purpose  :  Design a singleton design pattern for a booky persons performs various actions.
* 	
*  @Auther   : Shubham
*  @File     : SingletonPatternbusiness.js 
*  
************************************************************************************************/
let Life = (function () {

    let LifeThinngs;


    /**
     * @function  type():  Describes  booky nature
     * @param { }: no parameters are needed
     */

    function type() {

        function Laptop() {
            console.log("Laptop is Important  for education Life");
        }

        function Mobile() {
            console.log("Mobile is  Harmfull to life");
        }

        function Watch() {
            console.log("To Watch real time");
        }

        return {
            Laptop: Laptop,
            Mobile: Mobile,
            Watch: Watch,
        }
    }
    

    return {
        getInstance: function () {
            return !LifeThinngs? LifeThinngs = type() : LifeThinngs;
        }
    }

})();

module.exports = { Life
}