if(localStorage.getItem("light") === "true"){
    document.getElementById("theme").href = "light-mode.css"
}else{
    document.getElementById("theme").href = "dark-mode.css"
}

function toggleLightMode(){
    if(localStorage.getItem("light") === "false"){
        localStorage.setItem("light", "true")
    }else{
        localStorage.setItem("light", "false")
    }
    location.reload()
}
document.getElementById("stopButton").addEventListener("click", () => {
    location.reload()
})

document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("stopButton").hidden = false
    document.getElementById("startButton").hidden = true
    document.getElementById("countdown").hidden = false
    document.getElementById("break").hidden = true

    let timerExpiredAudio = new Audio("timer.mp3")

    let time = document.getElementById("time").value
    let hours = parseInt(time.split(":")[0]),
        minutes = parseInt(time.split(":")[1]) - 1,
        seconds = 60
    let x = setInterval(() => {

        seconds -= 1

        let testIfZero = minutes + hours + seconds
        if(testIfZero === 0){
            clearInterval(x)
            timerExpiredAudio.play().then()
            let y = setInterval(()=> {
                if (document.getElementById("title").innerHTML === "⠀⠀⠀⠀⠀⠀"){
                    document.getElementById("countdown").innerHTML = `EXPIRED`
                    document.getElementById("title").innerHTML = `EXPIRED`
                }else{
                    document.getElementById("countdown").innerHTML = `⠀⠀⠀⠀⠀⠀`
                    document.getElementById("title").innerHTML = `⠀⠀⠀⠀⠀⠀`
                }
            }, 300)
        }

        if (seconds <= 0) {
            if(testIfZero !== 0){
                minutes--
                seconds = 59
            }
        }
        if (minutes <= 0) {
            if(hours > 0){
                hours--
                minutes = 59
            }else{
                minutes = 0
            }
        }
        if (hours <= 0) {
            hours = 0
        }
        document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`
        document.getElementById("title").innerHTML = `${hours}h ${minutes}m ${seconds}s`


    }, 1000)
})