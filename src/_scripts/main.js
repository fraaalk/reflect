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

    $( '.header__nav-toggle' ).on( 'click', 'button', function() {
        $( '.header__off-canvas' ).toggleClass( 'is-visible' );
    });

    $( '.nav__listitem--l1' ).on ( 'mouseenter', 'a', function() {
    	$(this)
    		.parent( '.nav__listitem--l1' )
    		.addClass( 'is-active' )
            .siblings()
            .removeClass( 'is-active' );
    }).on( 'mouseleave', function() {
        
    });

    $( window ).on( 'resize', function() {
    	$( '.nav' ).removeClass( 'is-visible' );
    });

    $( '#google-maps' ).each( function() {
        new google.maps.Map(document.getElementById('google-maps'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    });

    $('.go__center').on('click', function(e){
        
        $('.go__inner').toggleClass('is-visible');
        $('.go__link').toggleClass('is-visible');

        e.preventDefault();
    });

    function addText(p)
{
    var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var b = p.getBBox();
    t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2 + 5) + ")");
    t.textContent = p.getAttribute("title");
    p.parentNode.insertBefore(t, p.nextSibling);
}

var paths = document.querySelectorAll(".go__center path, .go__link path");
for (var p in paths)
{
    addText(paths[p])
}
});
        