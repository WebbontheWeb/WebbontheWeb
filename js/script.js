document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.createElement('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');

    //ctx.fillStyle = 'blue';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
});