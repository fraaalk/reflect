'use strict';

import $ from 'jquery';

export default class Go {
    constructor() {
        this.name = 'go';

        var paths = document.querySelectorAll(".go path");

        this.bindEvents();

        for (var p in paths) {
            this.addText(paths[p], paths[p].getAttribute('title'));
        }
    }

    bindEvents() {
        $( '.go-comb__center').on('click', function(e){
            if ( $(this).attr('xlink:href') === "#") {
                $('.go-comb').toggleClass('is-visible');
                e.preventDefault();
            }
        }).on('mouseover', function(e) {
            $('.go-comb__inner, .go-comb__outer').addClass('is-teased');
        }).on('mouseout', function(){
            $('.go-comb__inner, .go-comb__outer').removeClass('is-teased');
        });
    }

    addText(p, title) {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "text"),
        b, yAxis;

        if ( typeof(p.getBBox) !== "function") {
            return;
        } 
        b = p.getBBox();

         if ( title === "Führung" ) {
            yAxis = (b.y + b.height - 2);
        } else if (title === "Balancierte" ) {
            yAxis = (b.y + 6);
        } else {
            yAxis = (b.y + b.height/2 + 5);
        }

        t.setAttribute("transform", "translate(" + (b.x + b.width/2) + " " + yAxis + ")");
        t.textContent = p.getAttribute("title");
        p.parentNode.insertBefore(t, p.nextSibling);
    }
}