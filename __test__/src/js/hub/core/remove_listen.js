/*
 * removeListen event
 * @param {String} key
 * @param {Function} handler
 * @return {void}
 */

'use strict';

export default function ( key, handler ) {
    const { observer } = this;

    if ( typeof observer[ key ] !== 'undefined' ) {
        observer[ key ].forEach(( _handler, index ) => {
            if ( _handler == handler ) {
                observer[ key ].splice( index, 1 );
            }
        });
    }
};
