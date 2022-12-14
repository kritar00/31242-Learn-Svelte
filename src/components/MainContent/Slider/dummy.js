

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('resize', function () {
        observeBodyWidth()
    });
    function observeBodyWidth() {
        if (window.innerWidth >= 920 && body.offsetWidth >= 920) {
            slider(4);
        } else if (window.innerWidth > 768 && body.offsetWidth > 768) {
            slider(2);
            body.style.marginLeft = null
        } else {
            slider(1);
        }
    }
    new ResizeObserver(observeBodyWidth).observe(body)

    if (media920.matches) {
        slider(4);
    } else if (media768.matches) {
        slider(2);
    } else {
        slider(1);
    }
})
function slider(itemDisplay) {
    let iterate4itemsClone = iterate4items
    let threeItemDisplay
    if (itemDisplay > 1 && itemDisplay <= 4) {
        threeItemDisplay = 3
    } else {
        threeItemDisplay = 1
    }
    const itemWidth = container.offsetWidth / itemDisplay
    const threeItemWidth = container.offsetWidth / threeItemDisplay
    let widthAllBox = itemWidth * item.length
    let widthAllItem = threeItemWidth * clientItem.length

    projects.style.width = `${widthAllBox}px`
    item.forEach(element => {
        element.style.marginRight = '20px'
        element.style.width = `${itemWidth - 20}px`
    })
    let spacing = widthAllBox - itemWidth * itemDisplay
    projects.style.transform = `translateX(0px)`;
    clients.style.transform = `translateX(0px)`;
    news.style.transform = `translateX(0px)`;
    btnLeft.addEventListener('click', function () {
        iterate4itemsClone -= itemWidth
        if (iterate4itemsClone < 0) {
            iterate4itemsClone = spacing
        }
        projects.style.transform = `translateX(${-iterate4itemsClone}px)`
        iterate4items = iterate4itemsClone
    })
    btnRight.addEventListener('click', function () {
        iterate4itemsClone += itemWidth
        if (iterate4itemsClone > spacing) {
            iterate4itemsClone = 0
        }
        projects.style.transform = `translateX(${-iterate4itemsClone}px)`
        iterate4items = iterate4itemsClone
    })
}