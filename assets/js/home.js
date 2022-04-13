MicroModal.init({
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    disableFocus: true
})

document.addEventListener('keydown', function(e) {
    var key = (!e.altKey && !e.ctrlKey && !e.metaKey) ? e.keyCode : null
    if(key == 65) { // about
        document.getElementById('whoami').scrollIntoView()
    }
    else if(key == 72) { // history
        document.getElementById('history').scrollIntoView()
    }
    else if(key == 83) { // skills
        document.getElementById('skills').scrollIntoView()
    }
    else if(key == 80) { // projects
        document.getElementById('projects').scrollIntoView()
    }
    else if(key == 67) { // contacts
        document.getElementById('contacts').scrollIntoView()
    }
    else if(key == 82) { // resume
        MicroModal.show('modal-1', {
            awaitOpenAnimation: true,
            awaitCloseAnimation: true,
            disableFocus: true
        })
    }
    else if(key == 84) { // Back to top
        document.getElementById('content').scrollIntoView()
    }
})