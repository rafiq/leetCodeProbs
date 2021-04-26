function findScreenHeight(width, ratio) {

    const decimalRatio = ratio.split(":")[0] / ratio.split(":")[1]
    let height = width / decimalRatio
    return `${width}x${height}`
}
console.log(
    findScreenHeight(1024,"4:3"),// "1024x768");
    findScreenHeight(1280,"16:9"),// "1280x720");
    findScreenHeight(3840,"32:9"),// "3840x1080");
)