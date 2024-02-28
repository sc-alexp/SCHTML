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
    if (link) {
    	var width = prompt("Please enter the width of the image (in px.), 300px is reccomended:");
    }

    if (link && width) {
        var textarea = document.getElementsByName("Text1")[0];
        var startPos = textarea.selectionStart;
        var endPos = textarea.selectionEnd;
        var selectedText = textarea.value.substring(startPos, endPos);
        var imgTag = '<img src="' + link + '" width="' + width + '">';

        var newText = textarea.value.substring(0, startPos) + imgTag + textarea.value.substring(endPos);
        textarea.value = newText;
		
		updateIframeContent();
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
        var linkTag = '<a href="' + link + '"><u>' + text + '</u></a>';
        var newText = textarea.value.substring(0, startPos) + linkTag + textarea.value.substring(endPos);
        textarea.value = newText;
		
		updateIframeContent();
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
            navigator.clipboard.writeText(clipboardContent.trim())
                .then(function() {
                    console.log('Text copied to clipboard:', clipboardContent);
                })
                .catch(function(error) {
                    console.error('Error copying text to clipboard: ', error);
                    alert('Error copying text to clipboard');
                });
        }
		
		function bold() {
			var textarea = document.getElementById("Text1");
			var start = textarea.selectionStart;
			var end = textarea.selectionEnd;
			var selectedText = textarea.value.substring(start, end);
			if (end-start > 0) {
				var newText = textarea.value.substring(0, start) + "<b>" + selectedText + "</b>" + textarea.value.substring(end);
				textarea.value = newText;
				
				updateIframeContent();
			} else {
				alert('No text selected');
			}
		}
		
		function underline() {
			var textarea = document.getElementById("Text1");
			var start = textarea.selectionStart;
			var end = textarea.selectionEnd;
			var selectedText = textarea.value.substring(start, end);
			if (end-start > 0) {
				var newText = textarea.value.substring(0, start) + "<u>" + selectedText + "</u>" + textarea.value.substring(end);
				textarea.value = newText;
				
				updateIframeContent();
			} else {
				alert('No text selected');
			}
		}
		
		function italic() {
			var textarea = document.getElementById("Text1");
			var start = textarea.selectionStart;
			var end = textarea.selectionEnd;
			var selectedText = textarea.value.substring(start, end);
			if (end-start > 0) {
				var newText = textarea.value.substring(0, start) + "<i>" + selectedText + "</i>" + textarea.value.substring(end);
				textarea.value = newText;
				
				updateIframeContent();
			} else {
				alert('No text selected');
			}
		}
		
		function big() {
			var textarea = document.getElementById("Text1");
			var start = textarea.selectionStart;
			var end = textarea.selectionEnd;
			var selectedText = textarea.value.substring(start, end);
			if (end-start > 0) {
				var newText = textarea.value.substring(0, start) + "<big>" + selectedText + "</big>" + textarea.value.substring(end);
				textarea.value = newText;
				
				updateIframeContent();
			} else {
				alert('No text selected');
			}
		}
		
		function small() {
			var textarea = document.getElementById("Text1");
			var start = textarea.selectionStart;
			var end = textarea.selectionEnd;
			var selectedText = textarea.value.substring(start, end);
			if (end-start > 0) {
				var newText = textarea.value.substring(0, start) + "<small>" + selectedText + "</small>" + textarea.value.substring(end);
				textarea.value = newText;
				
				updateIframeContent();
			} else {
				alert('No text selected');
			}
		}
		
		function code() {
			var textarea = document.getElementById("Text1");
			var start = textarea.selectionStart;
			var end = textarea.selectionEnd;
			var selectedText = textarea.value.substring(start, end);
			if (end-start > 0) {
				var newText = textarea.value.substring(0, start) + "<code>" + selectedText + "</code>" + textarea.value.substring(end);
				textarea.value = newText;
				
				updateIframeContent();
			} else {
				alert('No text selected');
			}
		}
           
function color() {
            var textarea = document.getElementById("Text1");
            var start = textarea.selectionStart;
            var end = textarea.selectionEnd;
            var selectedText = textarea.value.substring(start, end);
            var color = document.getElementById("colorPicker").value;

            if (end - start > 0) {
                var newText = textarea.value.substring(0, start) + '<span style="color:' + color + ';">' + selectedText + '</span>' + textarea.value.substring(end);
                textarea.value = newText;
				
				updateIframeContent();
            } else {
                alert('No text selected');
            }
}

function accountInfo() {
	if (confirm("This will clear the text field!\nDo you still want to continue?")) {
		var string = "<big><b><u>ASW</u></b></big>:\n";

		//Prompt for NetID
		var netID = prompt("Net-ID:");
		if (netID) {
			string += ("<b>Net-ID</b>: <code>" + netID + "</code>\n");
		}

		//Prompt for status
		var status = prompt("Status:");
		if (status) {
			string += ("<b>Status</b>: <code>" + status + "</code>\n");
		}

		//Prompt for OU
		var organizationalUnit = prompt("OU:");
		if (organizationalUnit) {
			string += ("<b>OU</b>: <code>" + organizationalUnit + "</code>\n");
		}

		//Prompt for Sponsor
		var sponsor = prompt("Sponsor:");
		if (sponsor) {
			string += ("<b>Sponsor</b>: <code>" + sponsor + "</code>\n");
		}

		/* OKTA */

		//Prompt for Last Login
		var lastLogin = prompt("Last Login:");
		if (lastLogin) {
			string += ("\n<big><b><u>Okta</u></b></big>:\n");
			string += ("<b>Last Login</b>: <code>" + lastLogin + "</code>\n");
		}

    	if (netID || status || organizationalUnit || Sponsor || lastLogin) {
        	var textarea = document.getElementsByName("Text1")[0];
        	textarea.value = string;
		
			updateIframeContent();
    	} else {
			alert("Insufficent information!");
		}
	}
}
// define a handler
function doc_keyUp(e) {

    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.ctrlKey && e.code === 'B') {
        // call your function to do the thing
        bold();
    }
}

// register the handler 
document.addEventListener('keyup', doc_keyUp, false);
