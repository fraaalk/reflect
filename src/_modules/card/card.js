'use strict';

import $ from 'jquery';

export default class Card {
  constructor( blub ) {
    this.name = 'card';

    console.log('%s module', this.name);

    this.$card = $(blub);
    this.active = 1;



    this.$next = $('.card__next');
	this.$prev = $('.card__prev');

	this.bindEvents = function() {
		this.$next.on( 'click', $.proxy( this.next, this ));
		this.$prev.on( 'click', $.proxy( this.prev, this ));
			
	};

	this.prev = function() {
		let $active = this.$card.find('.card--active');
		let $prev = this.$card.find('.card--prev');
		let $next = this.$card.find('.card--next');

		if ($prev.length === 0 ) {
			return;
		}

		$active.removeClass('card--active').addClass('card--next');
		$prev.removeClass('card--prev').addClass('card--active');
		$next.removeClass('card--next');
		$prev.prev('.card').addClass('card--prev');
	};

	this.next = function() {
		let $active = this.$card.find('.card--active');
		let $prev = this.$card.find('.card--prev');
		let $next = this.$card.find('.card--next');

		if ($next.length === 0 ) {
			return;
		}

		$prev.removeClass('card--prev');
		$active.addClass('card--prev').removeClass('card--active');
		$next.addClass('card--active').removeClass('card--next');
		$next.next('.card').addClass('card--next');
	};

	this.bindEvents();
  }
}
