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
    var width = prompt("Please enter the width of the image (in px.):");

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

function insertLink() {
    var link = prompt("Please enter the desired link:");
    var textarea = document.getElementsByName("Text1")[0];
    var startPos = textarea.selectionStart;
    var endPos = textarea.selectionEnd;
    var selectedText = textarea.value.substring(startPos, endPos);

    var text;
    if (selectedText) {
        text = selectedText;
    } else {
        text = prompt("Please enter the text to display");
    }

    if (link && text) {
        var linkTag = '<a href="' + link + '">' + text + '</a>';
        var newText = textarea.value.substring(0, startPos) + linkTag + textarea.value.substring(endPos);
        textarea.value = newText;
    }
}

function copyForTicket() {
            // Get the textarea contents
            var textareaContent = document.getElementById('Text1').value;
            // Split the contents by lines
            var lines = textareaContent.split('\n');
            // Prepare the clipboard content
            var clipboardContent = '';
            // Loop through each line
            lines.forEach(function(line) {
                // Append [code] to the beginning and [/code] to the end of each line
                clipboardContent += '[code]' + line + '[/code]\n';
            });

            // Copy to clipboard
            navigator.clipboard.writeText(clipboardContent)
                .then(function() {
                    console.log('Text copied to clipboard:', clipboardContent);
                    alert('Text copied to clipboard!');
                })
                .catch(function(error) {
                    console.error('Error copying text to clipboard: ', error);
                    alert('Error copying text to clipboard');
                });
        }
