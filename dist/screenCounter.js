var screenCounter = (function () {
    'use strict';

    function screenCounter(resize = false) {
        const body = document.body;

        if (resize) {
            const w = document.querySelector(".width-text");
            const h = document.querySelector(".height-text");

            w.textContent = `W : ${body.offsetWidth} px`;
            h.textContent = `H  : ${body.clientHeight} px`;

            return 0
        }

        const style = document.createElement('style');

        style.textContent = `
        .screen-counter{
            position:fixed;
            top:0;
            right:0.5rem;
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            color: #16FF00;
            font-family: "Nunito Sans",sans-serif;
            z-index:1300;
        }
        span{
            font-size: 14px;
            font-weight:600;
        }

        @media (max-width:767px){
            span{
                font-size:12px;
            }
        }
    `;
        document.head.appendChild(style);

        const newEl = document.createElement("div");
        const span1 = document.createElement("span");
        span1.textContent = `W : ${body.offsetWidth} px`;
        span1.classList.add('width-text');
        const span2 = document.createElement("span");
        span2.textContent = `H : ${body.clientHeight} px`;
        span2.classList.add('height-text');

        newEl.classList.add("screen-counter");
        newEl.append(span1, span2);

        body.appendChild(newEl);
    }

    window.onresize = () => screenCounter(true);

    return screenCounter;

})();
