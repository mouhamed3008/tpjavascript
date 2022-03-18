let menus = [{
        menu: "Dashboard",
        icon: "fa-solid fa-gauge-high",
        submenu: [
            "sous menu 1",
            "sous menu 2",
            "sous menu 3",
            "sous menu 4"
        ]
    },
    {
        menu: "Widget",
        icon: "fas fa-th",
        submenu: []
    },
    {
        menu: "Layout Options",
        icon: "fas fa-copy",
        submenu: [
            "sous menu 1",
            "sous menu 2",
            "sous menu 3",
            "sous menu 4"
        ]
    },
    {
        menu: "Charts",
        icon: "fa-solid fa-chart-pie",
        submenu: [
            "sous menu 1",
            "sous menu 2",
            "sous menu 3",
            "sous menu 4"
        ]
    },
    {
        menu: "UI Elements",
        icon: "fas fa-tree",
        submenu: [
            "sous menu 1",
            "sous menu 2",
            "sous menu 3",
            "sous menu 4"
        ]
    },
    {
        menu: "Forms",
        icon: "fas fa-pen-to-square ",
        submenu: [
            "sous menu 1",
            "sous menu 2",
            "sous menu 3",
            "sous menu 4"
        ]
    },
    {
        menu: "Tables",
        icon: "fas fa-table",
        submenu: [
            "sous menu 1",
            "sous menu 2",
            "sous menu 3",
            "sous menu 4"
        ]
    }

];


const navList = document.querySelector('.nav__list');




menus.forEach(menu => {
    const navLink = document.createElement('a');
    const icon = document.createElement('i');

    const span = document.createElement('span');
    navLink.setAttribute('class', 'nav__link')
    span.setAttribute('class', 'nav__name')
    icon.setAttribute('class', `${menu.icon} nav__icon`);
    span.innerText = menu.menu
    if (menu.submenu.length != 0) {
        navLink.classList.add('collapse')
        const span1 = document.createElement('span');
        const icon1 = document.createElement('i');
        icon1.setAttribute('class', 'fas fa-chevron-left');
        span1.setAttribute('class', 'collapse__link')
        span1.appendChild(icon1)
        const ul = document.createElement('ul')
        ul.setAttribute('class', 'collapse__menu')

        menu.submenu.forEach(submenuElement => {
            const a = document.createElement('a')
            a.setAttribute('class', 'collapse__sublink')
            a.innerText = submenuElement
            ul.appendChild(a)
        });

        navLink.append(icon, span, span1, ul)
    } else {
        navLink.append(icon, span)

    }

    navList.appendChild(navLink)


});







const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId)
    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('expander')

            bodypadding.classList.toggle('body-pd')
        })
    }
}
showMenu('nav-toggle', 'navbar', 'body-pd')


const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/
const linkCollapse = document.querySelectorAll('.collapse__link')


for (let i = 0; i < linkCollapse.length; i++) {
    linkCollapse[i].addEventListener('click', function() {

        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
    })
}