'use strict';

exports.generateParameters = function () {
    let parameters = [];
    let count = 0;
    process.argv.slice ( 2 ).forEach ( param => {
        if ( param ) {
            let paramArray = param.split ( '=' );
            paramArray [ 1 ] = paramArray [ 1 ] || paramArray [ 0 ];
            parameters [ paramArray [ 0 ] ] = paramArray [ 1 ];
            parameters [ count ] =  {
                name : paramArray [ 0 ],
                value :  parameters [ paramArray [ 0 ] ]
            };
            count++;
        }
    });
    return parameters;
};

exports.isObjectEmpty = function ( obj ) {
    if ( !obj ) {
        return true;
    }
    return ( Object.keys ( obj ).length );
};

exports.capitalizeFirstLetter = function ( strSentence ) {
    return strSentence[0].toUpperCase() + strSentence.slice(1);
};
