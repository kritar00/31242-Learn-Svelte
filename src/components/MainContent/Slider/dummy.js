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
    clients.style.width = `${widthAllItem}px`
    news.style.width = `${widthAllItem}px`
    item.forEach(element => {
        element.style.marginRight = '20px'
        element.style.width = `${itemWidth - 20}px`
    })
    clientItem.forEach(element => {
        element.style.marginRight = '20px'
        element.style.width = `${threeItemWidth - 20}px`
    })
    newsItem.forEach(element => {
        element.style.marginRight = '20px'
        element.style.width = `${threeItemWidth - 20}px`
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