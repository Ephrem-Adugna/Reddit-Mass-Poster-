var title;
var link;
function PostLink() {
    document.getElementById("postVid").style.visibility = 'hidden';
    document.getElementById("postLink").style.display = 'block';

}
function PostingVideos() {
    document.getElementById("postVid").style.visibility = 'visible';
    document.getElementById("postLink").style.display = 'none';

}
function getVideos() {
    var link = document.getElementById("link").value;
    document.getElementsByClassName("videos")[0].innerHTML = '';
   link = link.replace('?', '');
    link = link.replace('https://www.youtube.com/channel/', '');
    link = link.replace('/', '');
    link = link.replace('view_as=subscriber', '');
    var request = new XMLHttpRequest()

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyBcxAgPpKFMuglLi4dAAHnzJVC0hZsD7ZE&channelId='+link+'&part=snippet,id&order=date&maxResults=20', true)

    request.onload = function () {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            data.items.forEach((video) => {
                document.getElementsByClassName("videos")[0].innerHTML += '';

                document.getElementsByClassName("videos")[0].innerHTML += '<div class="subcontainer" onclick="ShowModal(\'' + video.snippet.title + '\',\'' + video.id.videoId +'\')"><img src="' + video.snippet.thumbnails.default.url + '"> <h5>' + video.snippet.title + '</h5>'
                document.getElementsByClassName("videos")[0].innerHTML += '</div>';
            })
            document.getElementById("errormsg").style.display = "none";

        }
        else {
            console.log(this.responseText)
            document.getElementById("errormsg").style.display = "inline";
        }
    }

    // Send request
    request.send()
    

}
function download() {
    var data = document.getElementById('subreddits').value;
    var type = "txt";
    var filename = "Saved Subreddits";  
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
function readTextFile() {
        
    
        fetch(document.getElementById('subredditspath').value)
            .then(response => response.text())
            .then(text => document.getElementById('subreddits').value = text)

}

var pathlink = document.getElementById('subredditspathlink');
var subredditpathlink = document.getElementById("subredditslink");
function AddBtn() {

    if (subredditpathlink.value !== '') {
        document.getElementById('subrbtn1').style.display = "inline";
        document.getElementById("postLink").innerHTML = '<div class="fa fa-play-circle fa-2x" id="advbtn" onclick="AdvertiseLink(\'' + document.getElementById('titlelink').value + '\',\'' + document.getElementById('postlink').value + '\')"></div> Post';

    }
    else {
        document.getElementById('subrbtn1').style.display = "none";
    }
}
function AddLinkBtn() {

    if (pathlink.value !== '') {
        document.getElementById('btnsub1').style.display = "inline";

    }
    else {
        document.getElementById('btnsub1').style.display = "none";

    }
}
function ShowModal(vidtitle, vidlink) {
    modal.style.display = "inline";
    title = vidtitle;
    link = vidlink;
}