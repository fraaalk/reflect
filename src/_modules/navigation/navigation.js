'use strict';

import $ from 'jquery';

export default class Navigation {
  constructor() {
    this.name = 'navigation';

    this.bindEvents();
  }

  bindEvents() {
    $( '.nav__listitem--l1' ).on ( 'mouseenter', 'a, button', function() {
        if (document.documentElement.clientWidth < 768) {
            return;
        }
        
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
  }
}