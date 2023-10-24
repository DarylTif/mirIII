const lockC = document.getElementById("lock-c");
const lock = document.getElementById("lock");
const barraLateral = document.querySelector(".barra-lateral");
const menuHorizontal = document.querySelector(".menu-horizontal");
const spans = document.querySelectorAll("span");
const main = document.querySelector("main");
const nombrePagina = document.querySelector("nombre-pagina");

lockC.addEventListener("click", () => {
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });
    lockC.style.display = 'none';
    
    if (lockC.style.display == 'none') {
        lock.style.display = 'block';
    }
    if (main.className == 'min-main') {
        barraLateral.style.width = '80px';
        main.style.marginLeft = '80px';
    } else {
        barraLateral.style.width = '280px';
        main.style.marginLeft = '300px';
    }
});

lock.addEventListener("click", () => {
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });
    
    lock.style.display = 'none';
    
    if (lock.style.display == 'none') {
        lockC.style.display = 'block';
    }
    if (main.className == 'min-main') {
        barraLateral.style.width = '80px';
        main.style.marginLeft = '80px';
    } else {
        barraLateral.style.width = '280px';
        main.style.marginLeft = '300px';
    }
});


window.onload = () => {
    lock.click();
    const miniBarraLateral = document.querySelector(".mini-barra-lateral");
    const menuVertical = document.getElementsByClassName('menu-vertical');
    var list = menuHorizontal.getElementsByTagName("li");
    Array.from(list).forEach(li => {
        if (li.querySelector("ul")) {
            li.addEventListener("mouseover", () => {
                miniBarraLateral.style.width = '280px';
                main.style.marginLeft = '300px';
                if (main.className == 'min-main') {
                    Array.from(menuVertical).forEach(menu => {
                        menu.style.left = '100px';
                    });
                } else {
                    Array.from(menuVertical).forEach(menu => {
                        menu.style.left = '200px';
                    });
                }
            });

            li.addEventListener("mouseout", () => {
                if (main.className == 'min-main') {
                    miniBarraLateral.style.width = '80px';
                    main.style.marginLeft = '80px';
                } else {
                    miniBarraLateral.style.width = '280px';
                    main.style.marginLeft = '300px';
                }
            });
        }
    });
};


