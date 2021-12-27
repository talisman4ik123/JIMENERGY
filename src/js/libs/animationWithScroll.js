export function animationWithScroll(elements) {
    const animationItems = document.querySelectorAll(elements);
    window.addEventListener('scroll', () => {
        animationItems.forEach(item => {
            const itemHeight = item.offsetHeight; //получаем высоту анимированого объекта
            const itemOffset = offset(item).top;  //позиция объкта относительно верха страницы
            const animationStart = 4;             //коэффициент регуляции момента старта анимации

            let animationItemPoint = window.innerHeight - itemHeight / animationStart;  //точка старта анимации

            if (itemHeight > window.innerHeight) {  //если высота объкта больше высоты браузера
                animationItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > itemOffset - animationItemPoint) && (pageYOffset + itemHeight)) {
                item.classList.add('_active');
            } else {
                item.classList.remove('_active');
            }
        });
    });
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}