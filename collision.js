
var Box = new Array();
var Xposition = new Array();
var Yposition = new Array();
parentBox = document.getElementById("main");
window.onload = createBoxes();
var counter = 0;
paragraph = document.getElementById("counter-display");
const cnt = document.createElement("p");
paragraph.append(cnt);

function createBoxes() {

    for (var i = 0; i < 10; i++) {
        const Boxes = document.createElement("div");
        parentBox.append(Boxes);
        var dx = positionGenx();
        var dy = positionGeny();
        Boxes.setAttribute('name', 'child-div-' + i);
        Boxes.setAttribute("id", "child-div-" + i);
        Boxes.setAttribute("style", "position:absolute; top:" + dy + "px; left:" + dx + "px; height:20px; width:20px; background-color: #a52a2a ");
        var temp = document.createElement("img");
        temp.setAttribute("style", "width:20px; height:20px;");
        Boxes.appendChild(temp);
        Boxes.addEventListener('click', function() {
            deleteBoxes(Boxes);
        });
        move(0.2, 0.2, dx, dy, Boxes, i);
    }

}


function positionGenx() {
    x = Math.floor((Math.random() * 580) + 1);
    return x;

}

function positionGeny() {
    y = Math.floor((Math.random() * 480) + 1);
    return y;
}

function move(countx, county, dx, dy, Boxes, index) {
    setInterval(() => {
        dx += countx;
        Boxes.style.left = dx + "px";

        dy += county;
        Boxes.style.top = dy + "px";
        if (dx > 580 || dx < 0) {
            countx = countx * -1;
        }
        if (dy > 480 || dy < 0) {
            county = county * -1;
        }

        Xposition[index] = dx;
        Yposition[index] = dy;
        for (var i = 0; i < 7; i++) {

            if (!(i === index)) {
                if ((Xposition[i] < dx + 20) && (Xposition[i] + 20 > dx) && (Yposition[i] < dy + 20) && (Yposition[i] + 20 > dy)) {
                    countx = countx * -1;
                    county = county * -1;
                }
            }
        }
        if (stepx < 0) {
            Boxes.style.transform = "rotate(270deg)";
            if (stepy > 0) {
                Boxes.style.transform = "rotate(-90deg)";
            }
            if (stepy < 0) {
                Boxes.style.transform = "rotate(90deg)";
            }
        }
        if (stepx > 0) {
            Boxes.style.transform = "rotate(90deg)";
            if (stepy > 0) {
                Boxes.style.transform = "rotate(90deg)";
            }
            if (stepy < 0) {
                Boxes.style.transform = "rotate(-90deg)";
            }
        }
    }, 10);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}