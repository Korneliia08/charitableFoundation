export default function toScroll(element) {
    let intervalFun;
    const eventHandler = () => {
        clearInterval(intervalFun);
        clearEvent();
    };
    document.addEventListener("wheel", eventHandler);
    const clearEvent = () => {
        document.removeEventListener("wheel", eventHandler);
    };

    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    let positionScrollY = window.scrollY;
    if (positionScrollY < yCoordinate + yOffset) {
        intervalFun = setInterval(() => {
            if (positionScrollY < yCoordinate + yOffset) {
                positionScrollY += 10;
                window.scrollTo(0, positionScrollY);
            } else {
                clearInterval(intervalFun);
                clearEvent();
                window.scrollTo({top: yCoordinate + yOffset, behavior: "smooth"});
            }
        }, 1);
    } else {
        intervalFun = setInterval(() => {
            if (positionScrollY > yCoordinate + yOffset) {
                positionScrollY -= 10;
                window.scrollTo(0, positionScrollY);
            } else {
                clearInterval(intervalFun);
                clearEvent();
                window.scrollTo({top: yCoordinate + yOffset, behavior: "smooth"});
            }
        }, 1);
    }
    setTimeout(() => {
        clearEvent();
        clearInterval(intervalFun);
    }, 5000);
}
