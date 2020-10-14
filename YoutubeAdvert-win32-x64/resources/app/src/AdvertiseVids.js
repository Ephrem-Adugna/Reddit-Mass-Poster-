const snoowrap = require('snoowrap');

window.Advertise = function (title, link) {
    const r = new snoowrap({
        userAgent: 'Your Mother',
        clientId: 'kz6h605MNWzEyg',
        clientSecret: 'EE5H7z1KoAcp1F8cbzaJnhYZrzk',
        username: 'Urmom1219',
        password: 'EphremA111'
    });
    var subreddits = document.getElementById('subreddits').value;
    subreddits = subreddits.split(' ');
    subreddits.forEach(sr => {
        r.getSubreddit(sr).submitLink({
            title: title,
            url: 'https://www.youtube.com/watch?v=' + link, sendReplies: true
        });
    });
};
window.AdvertiseLink = function (title, link) {
    var clientid = document.getElementById('ClientId').value;
    var clientsecret = document.getElementById('clientSecret').value;
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
    const r = new snoowrap({
        userAgent: 'Something',
        clientId: clientid,
        clientSecret: clientsecret,
        username: Username,
        password: Password
    });
    var subreddits = document.getElementById('subredditslink').value;
    subreddits = subreddits.split(' ');
    subreddits.forEach(sr => {
        r.getSubreddit(sr).submitLink({
            title: title,
            url: 'https://www.youtube.com/watch?v=' + link, sendReplies: true
        });
    });
};