//DOM
const btn = document.querySelectorAll('button');
const container = document.querySelector('.row-msg')



//Event
btn.forEach(element => {
    element.addEventListener('click', () => {
        bgc = element.className;
        let msg = document.createElement('p')
        let contentMsg = document.createElement('div')
        contentMsg.setAttribute('class', 'content-msg')
        msg.innerText = element.innerText;
        contentMsg.appendChild(msg)
        contentMsg.classList.add(bgc)

        container.appendChild(contentMsg)
        setInterval(() => contentMsg.remove(), 1000);
    })
});