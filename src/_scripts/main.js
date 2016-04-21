// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

$(() => {
    new Link(); // Activate Link modules logic


    $( '.header__menutoggle' ).on( 'click', function() {
        $( '.header__offcanvas' ).toggleClass( 'is-visible' );
    });
});
