const color = (e) => {
    styles = getComputedStyle(e)
    styles.backgroundColor
    document.getElementsByTagName('body')[0].style.backgroundColor = styles.backgroundColor

}