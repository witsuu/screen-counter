function screenCounter(r = false) {
    const body = document.body

    if (r) {
        const w = document.querySelector(".width-text")
        const h = document.querySelector(".height-text")

        w.textContent = 'W : ' + window.offsetWidth + "px"
        h.textContent = 'H : ' + window.offsetHeight + "px"

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
            font-size: 12px;
            font-weight:600;
        }
    `
    document.head.appendChild(style)

    const newEl = document.createElement("div")
    const span1 = document.createElement("span")
    span1.classList.add('width-text')
    const span2 = document.createElement("span")
    span2.classList.add('height-text')
    const span3 = document.createElement("span")
    span3.classList.add('fps-counter')

    span1.textContent = 'W : ' + window.offsetWidth + "px"
    span2.textContent = 'H : ' + window.offsetHeight + "px"

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