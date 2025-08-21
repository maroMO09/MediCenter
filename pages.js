const addbtn = document.getElementById('btn')
const input = document.getElementsByTagName("input")
const p1 = document.getElementById('p1')
let booked = false


addbtn.onclick = function (e) {
    e.preventDefault()


    if (!booked) {
        box()
        booked = true
    }
    else {
        tempMessage("it's allredy booked")
    }


}

function box() {
    let div = document.createElement("ul")
    document.body.appendChild(div)
    div.setAttribute("class" , "main-ul")

    let p = document.createElement("li")
    div.appendChild(p)
    p.innerText = "Booking successful"
    p.setAttribute("class" , "time")

    let delebtn = document.createElement("button")
    div.appendChild(delebtn)
    delebtn.innerText = "X"
    delebtn.setAttribute("class", "dele")

    // 👇 هنا بقى نسمع للضغط على زرار الحذف
    delebtn.addEventListener("click", function () {
        div.remove() // يمسح العنصر كله
        booked = false
    })
}


function tempMessage(msg) {
    let alertBox = document.createElement("div")
    alertBox.innerText = msg
    // msg.setAttribute("class" , "q")
    // alertBox.style.background = "#f8d7da"
    // alertBox.style.color = "#721c24"
    // alertBox.style.padding = "10px"
    // alertBox.style.marginTop = "10px"
    // alertBox.style.borderRadius = "5px"
    alertBox.setAttribute("class" , "massege")

    document.body.appendChild(alertBox)

    setTimeout(() => {
        alertBox.remove()
    }, 2500)
}