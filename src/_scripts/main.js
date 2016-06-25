// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Popup from '../_modules/popup/popup';
import Carousel from '../_modules/carousel/carousel';
import Deck from '../_modules/deck/deck';

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



    $( '.header__nav-toggle' ).on( 'click', function() {
        $( '.header__nav' ).toggleClass( 'is-visible' );
    });

    $( '.header__search-toggle' ).on( 'click', function() {
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
    }).on( 'mouseleave', function() {
        
    });

    $( '#google-maps' ).each( function() {
        new google.maps.Map(document.getElementById('google-maps'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    });

    $('.go-comb__center').on('click', function(e){
        $('.go-comb').toggleClass('is-visible');
        e.preventDefault();
    }).on('mouseover', function(e) {
        $('.go-comb__inner').addClass('is-teased');
    }).on('mouseout', function(){
        $('.go-comb__inner').removeClass('is-teased');
    });


    $('.footer__nav-headline').on( 'click', function(){
        $(this).parent('div').toggleClass('is-visible');
    });

    function addText(p)
{
    var t = document.createElementNS("http://www.w3.org/2000/svg", "text"),
        b;
    
    if ( typeof(p.getBBox) !== "function") {
        return;
    } 
    
    b = p.getBBox();
    t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2 + 5) + ")");
    t.textContent = p.getAttribute("title");
    p.parentNode.insertBefore(t, p.nextSibling);
}

var paths = document.querySelectorAll(".go-comb__center path, .go-comb__outer path");
for (var p in paths)
{
    addText(paths[p])
}
});
        