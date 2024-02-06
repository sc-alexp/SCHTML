window.onload = function() {
    // Fetch the content of the announcement.txt file
    fetch('announcement.txt')
        .then(response => response.text())
        .then(text => {
            // Set the text content of the <p> element
            document.getElementById('announcementText').textContent = text;
        })
        .catch(error => console.error('Error fetching announcement:', error));
}

function refreshPage(){
    window.location.reload();
}

function notReady() {
  alert("Functionality not yet implemented!");
}

function insertImage() {
    var link = prompt("Please enter the link to the image:");
    var width = prompt("Please enter the width of the image:");

    if (link && width) {
        var textarea = document.getElementsByName("Text1")[0];
        var startPos = textarea.selectionStart;
        var endPos = textarea.selectionEnd;
        var selectedText = textarea.value.substring(startPos, endPos);
        var imgTag = '<img src="' + link + '" width="' + width + '">';

        var newText = textarea.value.substring(0, startPos) + imgTag + textarea.value.substring(endPos);
        textarea.value = newText;
    }
}
