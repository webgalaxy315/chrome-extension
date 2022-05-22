var num = document.getElementsByClassName('FriendRequestAdd').length;
if (num < 1) {
    alert("Cannot find add friend button!");
} else {
    var friendRequests = 0;
    for (var i = 0; i< num ; i++){
      var nguyen = document.getElementsByClassName('FriendRequestAdd')[i];
      if (nguyen.classList.contains('hidden_elem')) {
        continue;
      }
      nguyen.click();
      friendRequests += 1;
    }
    alert("Sent friend requests to " + friendRequests + "/" + num + "people");
}
