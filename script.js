



function cp(){
    var text = window.location.href
    navigator.clipboard.writeText(text.value)

    window.alert("Copied url : "+text.value)

    }
