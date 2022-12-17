let game = document.getElementsByClassName("game")[0];
let start = document.getElementsByClassName("button")[0];
let inp = document.getElementsByClassName("changeTime")[0];
let time = document.getElementsByClassName("time")[0];
let cube = document.getElementsByClassName("cube")[0];
let points = document.getElementsByClassName("points")[0];
let st = document.getElementsByClassName("time_span")[0];
let ps = document.getElementsByClassName("points_span")[0];
let max_sp = document.getElementsByClassName("max_sp")[0];

let score = 0;
let time_sp = +inp.value;
let max = 0;

let colors = ['#CB356B', '#BD3F32', '#3A1C71', '#D76D77', '#283c86', '#45a247', '#8e44ad', '#155799', '#159957', '#000046', '#1CB5E0', '#2F80ED']


start.addEventListener("click", () => {
    startGame();
})

cube.addEventListener("click", () => {
    if (time_sp <= 0) {
        return
    } else {
        let random = Math.floor(Math.random() * 70 + 30) + "px";
        let randomColor = Math.floor(Math.random() * 11);
        let randomPositionX = Math.floor(Math.random() * 170 + 30) + "px"
        let randomPositionY = Math.floor(Math.random() * 170 + 30) + "px"
        cube.style.top = randomPositionY;
        cube.style.left = randomPositionX;
        cube.style.backgroundColor = colors[randomColor]
        cube.style.width = random;
        cube.style.height = random;
        score++;
        ps.innerHTML = score;
        console.log(ps)
        if (score > max) {
            max = score
            max_sp.innerHTML = max;
        }
    }
})

function startGame() {
    start.style.display = "none";
    cube.style.display = "block";
    time.style.display = "block"
    points.style.display = "none"
    score = 0
    ps.innerHTML = score
    time_sp = +inp.value;
    st.innerHTML = time_sp;
    let random = Math.floor(Math.random() * (100 - 30) + 30) + "px";
    let randomColor = Math.floor(Math.random() * 11)
    cube.style.backgroundColor = colors[randomColor]
    cube.style.width = random;
    cube.style.height = random;
    let interval = setInterval(() => {
        time_sp -= 0.1
        time_sp = time_sp.toFixed(1)
        if (time_sp <= 0) {
            clearInterval(interval)
            time.style.display = "none"
            points.style.display = "block"
            start.style.display = "block";
            cube.style.display = "none"
        }
        st.innerHTML = time_sp
    }, 100)

    console.log(random)
}