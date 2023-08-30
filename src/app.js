function screenCounter(resize = false) {
    const body = document.body

    if (resize) {
        const w = document.querySelector(".width-text")
        const h = document.querySelector(".height-text")

        w.textContent = 'W : ' + body.offsetWidth + "px"
        h.textContent = 'H : ' + body.clientHeight + "px"

        return 0
    }

    const style = document.createElement('style')

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
    `
    document.head.appendChild(style)

    const newEl = document.createElement("div")
    const span1 = document.createElement("span")
    span1.textContent = 'WIDTH : ' + body.offsetWidth + "px"
    span1.classList.add('width-text')
    const span2 = document.createElement("span")
    span2.textContent = 'HEIGHT : ' + body.clientHeight + "px"
    span2.classList.add('height-text')
    const span3 = document.createElement("span")
    span3.classList.add('fps-counter')

    newEl.classList.add("screen-counter")
    newEl.append(span1, span2, span3)

    body.appendChild(newEl)

    // fps variable
    var startTime = Date.now();
    var frame = 0

    function tick() {
        var time = Date.now();
        frame++;
        if (time - startTime > 1000) {
            span3.textContent = `FPS : ${(frame / ((time - startTime) / 1000)).toFixed(1)}`;
            startTime = time;
            frame = 0;
        }
        window.requestAnimationFrame(tick);
    }

    tick()
}

window.onresize = () => screenCounter(true)

export default screenCounter