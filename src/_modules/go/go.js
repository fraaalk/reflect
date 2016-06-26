'use strict';

import $ from 'jquery';

export default class Go {
    constructor() {
        this.name = 'go';
        console.log('%s module', this.name);

        var paths = document.querySelectorAll(".go-comb__center path, .go-comb__outer path");

        this.bindEvents();

        for (var p in paths) {
            this.addText(paths[p]);
        }
    }

    bindEvents() {
        $( '.go-comb__center').on('click', function(e){
            if ( $(this).attr('xlink:href') === "#") {
                $('.go-comb').toggleClass('is-visible');
                e.preventDefault();
            }
        }).on('mouseover', function(e) {
            $('.go-comb__inner').addClass('is-teased');
        }).on('mouseout', function(){
            $('.go-comb__inner').removeClass('is-teased');
        });
    }

    addText(p) {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "text"),
        b;

        if ( typeof(p.getBBox) !== "function") {
            return;
        } 

        b = p.getBBox();
        t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + (b.y + b.height/2 + 5) + ")");
        t.textContent = p.getAttribute("title");
        p.parentNode.insertBefore(t, p.nextSibling);
    }
}