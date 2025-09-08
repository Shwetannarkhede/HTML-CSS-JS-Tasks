// 1. Change Text by ID
function change() {
    let a = document.getElementById("title");
    a.innerHTML = 'Welcome to My Page';
}

// 2. Change Background by Class
function bg() {
    let info = document.getElementsByClassName("highlight");
    for (let i = 0; i < info.length; i++) {
        info[i].style.backgroundColor = "yellow";
    }
}

// 3. Hide an Element by ID
function hide() {
    let h = document.getElementById("box1");
    h.style.display = "none";
}

// 4. Increase Font Size of Class Elements
function fonts() {
    let f = document.getElementsByClassName("note");
    for (let i = 0; i < f.length; i++) {
        f[i].style.fontSize = "24px";
    }
}

// 5. Set Image Width by ID
function img() {
    let g = document.getElementById("profilePic");
    g.style.width = "200px";
}

// 6. Toggle Visibility
function toggle() {
    let items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        if (items[i].style.display === "none") {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

// 7. Count Items
function count() {
    let items = document.getElementsByClassName("item");
    alert("Total number of items: " + items.length);
}

// 8. Make All Text Uppercase
function Uppercase() {
    let items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].innerText = items[i].innerText.toUpperCase();
    }
}
