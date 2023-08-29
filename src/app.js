function screenCounter(resize = false) {
    const body = document.body

    if (resize) {
        const w = document.querySelector(".width-text")
        const h = document.querySelector(".height-text")

        w.textContent = `W : ${body.offsetWidth} px`
        h.textContent = `H  : ${body.offsetHeight} px`

        return 0
    }

    const style = document.createElement('style')

    style.textContent = `
        .screen-counter{
            position:fixed;
            top:3rem;
            right:3rem;
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            gap:1rem;
            color: #16FF00;
            font-family: "Nunito Sans",sans-serif;
            z-index:1300;
        }
        span{
            font-size: 20px;
            font-weight:600;
        }

        @media (max-width:767px){
            .screen-counter{
                top:2rem;
                right:2rem;
            }
        }
    `
    document.head.appendChild(style)

    const newEl = document.createElement("div")
    const span1 = document.createElement("span")
    span1.textContent = `W : ${body.offsetWidth} px`
    span1.classList.add('width-text')
    const span2 = document.createElement("span")
    span2.textContent = `H  : ${body.offsetHeight} px`
    span2.classList.add('height-text')

    newEl.classList.add("screen-counter")
    newEl.append(span1, span2)

    body.appendChild(newEl)
}

window.onresize = () => screenCounter(true)

export default screenCounter