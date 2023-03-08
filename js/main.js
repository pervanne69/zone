const animationItems = document.querySelectorAll('._animation-items')

const animationItemsSecond = document.querySelectorAll('._animation-items-second')


if (animationItems.length > 0) {
    window.addEventListener('wheel', animationOnScroll)
    window.addEventListener('scroll', animationOnScroll)
    function animationOnScroll() {
        for (let index = 0; index < animationItems.length; index++) {
            const animationItem = animationItems[index]
            const animationItemHeight = animationItem.offsetHeight
            const animationItemOffset = offset(animationItem).top
            const animationStart = 4

            let animationItemPoint = window.innerHeight - animationItemHeight / animationStart

            if (animationItemHeight > window.innerHeight) {
                animationItemPoint = window.innerHeight - window.innerHeight / animationStart
            }
            if ((scrollY > (animationItemOffset - animationItemPoint)) && (scrollY < (animationItemOffset + animationItemHeight))) {
                animationItem.classList.add('_active')
                animationItem.classList.add('stop-counting')
            } else {
                animationItem.classList.remove('_active')
            }
        }
        if (animationItemsSecond.length > 0) {
            for (let index = 0; index < animationItemsSecond.length; index++) {
                const animationItem = animationItemsSecond[index]
                const animationItemHeight = animationItem.offsetHeight
                const animationItemOffset = offset(animationItem).top
                const animationStart = 2.5

                let animationItemPoint = window.innerHeight - animationItemHeight / animationStart

                if (animationItemHeight > window.innerHeight) {
                    animationItemPoint = window.innerHeight - window.innerHeight / animationStart
                }
                if ((scrollY > (animationItemOffset - animationItemPoint)) && (scrollY < (animationItemOffset + animationItemHeight))) {
                    animationItem.classList.add('_active-second')
                    animationItem.classList.add('stop-counting')
                } else {
                    animationItem.classList.remove('_active-second')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollY || document.documentElement.scrollLeft,
            scrollTop = window.scrollX || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}

setTimeout(animationOnScroll, 200)