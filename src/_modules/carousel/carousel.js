'use strict';

import $ from 'jquery';

export default class Carousel {
    constructor( element ) {
        
        this.name = 'carousel';
        this.$carousel = $( element );

        this.autoplay = element.dataset.carouselAutoplay || false;
        this.nav = element.dataset.carouselNav || false;
        this.interval = false;
        this.currentSlide = 0;

        this.$list = $( '.carousel__slide-list', this.$carousel );
        this.$slides = $( '.carousel__slide', this.$carousel );
        this.$prevNext = $( '.carousel__button', this.$carousel );
        this.$bNext = $( '.carousel__button--next', this.$carousel );
        this.$bPrev = $( '.carousel__button--prev', this.$carousel );

        if ( this.autoplay ) {
            this.startAutoplay();
        }

        if( this.nav ) {
            this.addNav();
        }

        this.bindEvents();
    }

    addNav() {
        let count = this.$slides.length;
        let $nav = $('<div class="carousel__page-indicator" />');

        for(let i = 0; i < this.$slides.length; i++ ) {
            if ( i === 0 ) {
                $nav.append( '<span class="is-active">•</span>');
            } else {
                $nav.append( '<span>•</span>');
            }
        }

        this.$carousel.append( $nav );
    }

    startAutoplay() {
        this.interval = window.setInterval( $.proxy( this.slide, this), this.autoplay );
    };

    stopAutoplay() {
        clearInterval( this.interval );
    }

    slide() {
        var el, 
            i, 
            newSlide, 
            _ref;
        
        el = this.$carousel.find('.carousel__slide.is-ref').removeClass('is-ref');

        if ( event && $( event.currentTarget ).hasClass( 'carousel__button--prev' ) ) {
            newSlide = this.prev( el );
 
            this.currentSlide = ( this.currentSlide === 0 ) ? this.$slides.length - 1 : this.currentSlide - 1;
            this.$list
                .addClass( 'is-reversing' );
        } else { 
            newSlide = this.next( el );

            this.currentSlide = ( this.currentSlide === this.$slides.length - 1 ) ? 0 : this.currentSlide + 1;
            this.$list
                .removeClass( 'is-reversing' );
        }
        

        newSlide
            .addClass( 'is-ref' )
            .css( 'order', 1 );

        for (i = 2, _ref = this.$slides.length; 2 <= _ref ? i <= _ref : i >= _ref; 2 <= _ref ? i++ : i--) {
            newSlide = this.next( newSlide ).css( 'order', i );
        }
        
        this.$list
            .removeClass( 'is-set' );

        this.$carousel
             .find( '.carousel__page-indicator span')
             .removeClass ( 'is-active' )
             .eq( this.currentSlide )
             .addClass( 'is-active' );

        window.setTimeout( $.proxy( this.fixStage, this), 50);
    }

    fixStage() {
        this.$list.addClass( 'is-set' );
    }

    bindEvents() {
        this.$prevNext.on( 'click', $.proxy( this.slide, this) );

        if ( this.autoplay ) {
            this.$carousel
                .on( 'mouseenter', $.proxy( this.stopAutoplay, this ))
                .on( 'mouseleave', $.proxy( this.startAutoplay, this ));
        }
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
