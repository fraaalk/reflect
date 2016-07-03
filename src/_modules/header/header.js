'use strict';

import $ from 'jquery';

export default class Header {
    constructor() {
        this.name = 'header';
        this.bindEvents();
    }

    bindEvents() {
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
    }
}
