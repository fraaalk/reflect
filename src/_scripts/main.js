// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Popup from '../_modules/popup/popup';
import Carousel from '../_modules/carousel/carousel';
import Deck from '../_modules/deck/deck';

$(() => {
    new Link(); // Activate Link modules logic
    

    $('[data-popup]').each( function() {
        new Popup( this );
    });
    
    $('[data-deck]').each( function() {
        new Deck( this );
    });

    $('[data-carousel]').each( function() {
        new Carousel( this );
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


        