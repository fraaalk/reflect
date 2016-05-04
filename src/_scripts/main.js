// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import Popup from '../_modules/popup/popup';
import Card from '../_modules/card/card';

$(() => {
    new Link(); // Activate Link modules logic
    

    $('[data-popup]').each( function() {
        new Popup( this );
    });
    
    $('[data-card]').each( function() {
        new Card( this );
    });


    $( '.header__menutoggle' ).on( 'click', function() {
        $( '.nav' ).toggleClass( 'is-visible' );
    });

    $( '.header__searchtoggle' ).on( 'click', function() {
        $( '.search' ).toggleClass( 'is-visible' );
    });

    $( '.nav__listitem--l1' ).on ( 'click', 'a', function() {
    	$(this)
    		.parent( '.nav__listitem--l1' )
    		.toggleClass( 'is-active' );
    });

    $( window ).on( 'resize', function(){
    	$( '.nav' ).removeClass( 'is-visible' );
    });
});


        