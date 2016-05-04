'use strict';

import $ from 'jquery';

export default class Popup {
    constructor( blub ) {
        this.name = 'popup';
        this.options = blub.dataset;

        this.$popup = $( blub );

        let popupWidth = blub.dataset.popupWidth || 200;
        let popupHeight = blub.dataset.popupHeight || 200;
        let popupUrl = this.$popup.attr('href'); 


        // Opens the url in a new window and supressing
        // default event (aka following the link)
        this.openPopup = function( event ) {

            window.open( popupUrl, 'blub',[
                'width=' + popupWidth,
                'height=' + popupHeight,
                'left=' + Math.floor( ( document.documentElement.clientWidth / 2 ) - ( popupWidth / 2 ) ),
                'top=' + Math.floor( ( document.documentElement.clientHeight / 2 ) - ( popupHeight / 2 ) ),
                'resizable',
                'scrollbars',
                'status'
            ].join( ',' ));

            event.preventDefault();
        };


        this.bindEvents = function() {
            this.$popup.on('click', $.proxy( this.openPopup, this) );
        };

        this.bindEvents();
    }
}
