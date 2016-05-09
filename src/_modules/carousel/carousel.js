'use strict';

import $ from 'jquery';

export default class Carousel {
    constructor( element ) {
        this.name = 'carousel';
        this.$carousel = $( element );
        this.$list = $( '.carousel__slide-list', this.$carousel );
        this.$slides = $( '.carousel__slide', this.$carousel );
        this.$prevNext = $( '.carousel__button', this.$carousel );
        this.$bNext = $( '.carousel__button--next', this.$carousel );
        this.$bPrev = $( '.carousel__button--prev', this.$carousel );

        this.bindEvents();
    }

    slide() {
        var el, 
            i, 
            newSlide, 
            _ref;
        
        el = $('.is-ref').removeClass('is-ref');

        if ( $( event.currentTarget ).hasClass( 'carousel__button--next' ) ) {
            newSlide = this.next( el );
            this.$list
                .removeClass( 'is-reversing' );
        } else {
            newSlide = this.prev( el );
            this.$list
                .addClass( 'is-reversing' );
        }
        
        newSlide
            .addClass( 'is-ref' )
            .css( 'order', 1 );
        
        for (i = 2, _ref = this.$slides.length; 2 <= _ref ? i <= _ref : i >= _ref; 2 <= _ref ? i++ : i--) {
            newSlide = this.next( newSlide ).css( 'order', i );
        }
        
        this.$list
            .removeClass( 'is-set' );

        window.setTimeout( $.proxy( this.fixStage, this), 50);
    }

    fixStage() {
        this.$list.addClass( 'is-set' );
    }

    bindEvents() {
        this.$prevNext.on( 'click', $.proxy( this.slide, this) );
    }

    next( el ) {
        if (el.next().length > 0) {
            return el.next();
        } else {
            return this.$slides.first();
        }
    }

    prev( el ) {
        if (el.prev().length > 0) {
           return el.prev();
        } else {
            return this.$slides.last();
        }
    }
}
