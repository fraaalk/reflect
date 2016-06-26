// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Popup from '../_modules/popup/popup';
import Carousel from '../_modules/carousel/carousel';
import Deck from '../_modules/deck/deck';
import Go from '../_modules/go/go';

$(() => {

    $('[data-popup]').each( function() {
        new Popup( this );
    });
    
    $('[data-deck]').each( function() {
        new Deck( this );
    });

    $('[data-carousel]').each( function() {
        new Carousel( this );
    });

    $('[data-go]').each( function() {
        new Go( this );
    });


    $( '.header__nav-toggle' ).on( 'click', function() {
        $( '.header__nav' ).toggleClass( 'is-visible' );
    });

    $( '.header__search-toggle' ).on( 'click', function() {
        $( '.header__nav' ).removeClass( 'is-visible' );
        $( '.header__search' ).addClass( 'is-visible' );
        $( '.header__search input').on('blur', function(e) {
            // giving a small timeout so the click on the submit
            // button can fire before we hide the search again
            window.setTimeout(function(){
                $( '.header__search' ).removeClass( 'is-visible' );
            }, 200);
        }).focus();
    });

    $( '.header__search form' ).on('mouseleave', function(){
        window.setTimeout(function(){
            $( '.header__search' ).removeClass( 'is-visible' );
        }, 200);
    });

    $( '.nav__listitem--l1' ).on ( 'mouseenter', 'a, button', function() {
    	$(this)
    		.parent( '.nav__listitem--l1' )
    		.addClass( 'is-active' )
            .siblings()
            .removeClass( 'is-active' );

        $('.nav__overlay').addClass('is-visible');
    });

    $('.nav__overlay').on( 'mouseenter', function() {
        if( $('.nav__overlay').hasClass('is-visible') ) {
            window.setTimeout(function(){
                $( '.nav__listitem--l1' ).removeClass('is-active');
                $('.nav__overlay').removeClass('is-visible');
            }, 200);
        }
    });

    $('.footer__nav-headline').on( 'click', function(){
        $(this).parent('div').toggleClass('is-visible');
    });
});
        