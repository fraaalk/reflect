'use strict';

import $ from 'jquery';

export default class Footer {
  constructor() {
    this.name = 'footer';
    console.log('%s module', this.name);

    this.bindEvents();
  }

  bindEvents() {
  	$('.footer__nav-headline').on( 'click', function(){
        $(this).parent('div').toggleClass('is-visible');
    });
  }
}
