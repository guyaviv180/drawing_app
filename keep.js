function onKeyDown(event){
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 39:
            x += speed;
            break;
        case 37:
            x -= speed;
            break;
        case 38:
            y -= speed;
            break;
        case 40:
            y += speed;
            break;
    }
}