let homeScore = document.getElementById("home_score")
let guestScore = document.getElementById("guest_score")

let homeCount = 0
let guestCount = 0

function home_1_point(){
    homeCount += 1
    homeScore.textContent = homeCount
}

function home_2_point(){
    homeCount += 2
    homeScore.textContent = homeCount
}

function home_3_point(){
    homeCount += 3
    homeScore.textContent = homeCount
}

function guest_1_point(){
    guestCount += 1
    guestScore.textContent = guestCount
}

function guest_2_point(){
    guestCount += 2
    guestScore.textContent = guestCount
}

function guest_3_point(){
    guestCount += 3
    guestScore.textContent = guestCount
}

function reset(){
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
}