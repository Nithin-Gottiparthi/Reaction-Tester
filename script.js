 var start = new Date().getTime();

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function move() {
        var shape = document.getElementById("shape");
        var left = Math.random() * (window.innerWidth - 200); // Keep it within the screen
        var top = Math.random() * (window.innerHeight - 200);
        var wh = Math.random() * 200 + 100;

        shape.style.left = left + "px";
        shape.style.top = top + "px";
        shape.style.width = wh + "px";
        shape.style.height = wh + "px";
        shape.style.display = "block";
        shape.style.backgroundColor = getRandomColor();

        start = new Date().getTime();
    }

    document.getElementById("shape").onclick = function () {
        document.getElementById("shape").style.display = "none";
        var end = new Date().getTime();
        var timeTaken = (end - start) / 1000;
        alert("You took " + timeTaken + " seconds");
        move();
    };

    move();
