// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Popup from '../_modules/popup/popup';
import Carousel from '../_modules/carousel/carousel';
import Deck from '../_modules/deck/deck';
import Go from '../_modules/go/go';
import Header from '../_modules/header/header';
import Navigation from '../_modules/navigation/navigation';
import Footer from '../_modules/footer/footer';

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

    $('[data-header]').each( function() {
        new Header( this );
    });

    $('[data-navigation]').each( function() {
        new Navigation( this );
    });

    $('[data-footer]').each( function() {
        new Footer( this );
    });
});