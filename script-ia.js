let encodedUrl = "aHR0cHM6Ly9pZnJhbWUuaW50ZXJheGFpLmNvbS82NzlmOWNlZmIxMzk2MTM4OGU0N2Q4YWY="; 

let decodedUrl = atob(encodedUrl);
document.getElementById("myIframe").src = decodedUrl;
