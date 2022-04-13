document.addEventListener('keydown', function(e) {
    var key = (!e.altKey && !e.ctrlKey && !e.metaKey) ? e.keyCode : null
    if(key == 84) { // Back to top
        document.querySelector('html').scrollIntoView()
    }
})