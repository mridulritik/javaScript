// Imediatly Invoked Function Expression 
/*
Benifit of using this==>
    >if we make file which have database connection and we want its run immediatly if file load
    >to prevent the pollution from global variable into an function
    >its declare by ( function() )( this work as function call )
*/


/**Named IIFE */
(function chai() {
    console.log("DB Connected")
})();    // *** itsvery imp to put ; after iife to stop it because by that it interfare in other iife

// (function)(executin call)


/**simple IIFE */
((name)=>{
    console.log(`DB connected two ${name}`)
})("mridul")