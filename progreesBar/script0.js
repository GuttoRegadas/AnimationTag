const progressBar = document.getElementsByClassName('progresse-bar')[0]
setInterval(() => {
    const computerStyle = getComputedStyle(progressBar)
    const width = parseFloat(computerStyle.getPropertyValue
    ('--width')) || 0
    progressBar.style.setPropety('--width', width + .1)
}, 5)