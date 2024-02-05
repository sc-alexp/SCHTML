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
