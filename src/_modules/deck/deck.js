'use strict';

import $ from 'jquery';

export default class Deck {
    constructor( element ) {
        this.$deck = $( element );
        this.$next = $( '.deck__button--next', this.$deck );
        this.$prev = $( '.deck__button--prev', this.$deck );
        this.$cards = $('.deck__card', this.$deck);

        this.bindEvents();

        this.$cards
            .eq(1)
            .addClass( 'deck__card--active' )
            .end()
            .eq(0)
            .addClass( 'deck__card--next' )
            .end()
            .eq(2)
            .addClass( 'deck__card--prev' );
    }
        
    bindEvents() {
        this.$next.on( 'click', this.next );
        this.$prev.on( 'click', this.prev );
    }

    prev() {
        let $active = $( '.deck__card--active', this.$deck );
        let $prev   = $( '.deck__card--prev', this.$deck );
        let $next   = $( '.deck__card--next', this.$deck );
        let $bPrev  = $( '.deck__button--prev', this.$deck );
        let $bNext  = $( '.deck__button--next', this.$deck );

        $bPrev
            .toggleClass( 'is-disabled', $prev.prev( '.deck__card' ).length === 0 );
        $bNext
            .removeClass( 'is-disabled' );

        if ($prev.length === 0 ) {
            return;
        }

        $active
            .removeClass( 'deck__card--active' )
            .addClass( 'deck__card--next' );
        $next
            .removeClass( 'deck__card--next' );
        $prev
            .removeClass( 'deck__card--prev' )
            .addClass( 'deck__card--active' )
            .prev( '.deck__card' )
            .addClass( 'deck__card--prev' );
    }

    next() {
        let $active = $( '.deck__card--active', this.$deck );
        let $prev   = $( '.deck__card--prev', this.$deck );
        let $next   = $( '.deck__card--next', this.$deck );
        let $bPrev  = $( '.deck__button--prev', this.$deck );
        let $bNext  = $( '.deck__button--next', this.$deck );

        $bNext
            .toggleClass( 'is-disabled', $next.next( '.deck__card' ).length === 0 );
        $bPrev
            .removeClass( 'is-disabled' );

        if ($next.length === 0 ) {
            return;
        }

        $prev
            .removeClass( 'deck__card--prev' );
        $active
            .addClass( 'deck__card--prev' )
            .removeClass( 'deck__card--active' );
        $next
            .addClass( 'deck__card--active' )
            .removeClass( 'deck__card--next' )
            .next( '.deck__card' )
            .addClass( 'deck__card--next' );
    }
}
