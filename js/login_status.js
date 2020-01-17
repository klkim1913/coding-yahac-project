var loginStatus = {
    status : 'connected'
}
var elements = document.querySelectorAll('a');
for(var i=0;i<elements.length;i++) {
    if(elements[i].className === 'check_login') {
        elements[i].onclick = function() {
            if(loginStatus.status==='disconnected') {
                event.preventDefault();
                alert('로그인 후 이용해주세요!');
                location.href="login.html";
            }
        }
    }
}
if(loginStatus.status==='connected') {
    document.querySelector('#login_status_text').innerHTML="로그아웃";
}