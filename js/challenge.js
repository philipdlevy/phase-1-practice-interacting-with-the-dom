document.addEventListener("DOMContentLoaded", () => {

    let interval = setInterval(incrementCounter, 1000)

    const plus = document.getElementById("plus")
    plus.addEventListener("click", incrementCounter)

    //second way to add the decrement
    // const minus = document.getElementById('minus')
    // minus.addEventListener("click", () => {
    //     let count = document.getElementById("counter")
    //     count.textContent = parseInt(count.textContent, 10) -1
    // })


    // if i didn't do getelemntByid, id have to make these two variables in order to access them. 
    const heart = document.getElementById("heart")
    let likesObj = {}
        let li = document.createElement("li")
    heart.addEventListener("click", () => {
        let counterValue = document.getElementById("counter").textContent
        
        if(likesObj[counterValue]) {            // we want to take my object, set a key, grab the number the counter is at, and if it exists, then we can increment the value it is set to by 1. 
            likesObj[counterValue] += 1         // so we can keep track of how many times we clicked it. // and if it doesnt exist, we set the intial value to 1 in the else statement.
         } else {                                    
            likesObj[counterValue] = 1
            
        }

        li.innerText = `${counterValue} has been liked ${likesObj[counterValue]} times.`
        let likesUL = document.querySelector(".likes")
        likesUL.appendChild(li)
    })
    // const submit = document.getElementById("submit")

    const minus = document.getElementById("minus")
    minus.addEventListener("click", decrementCounter)

    const pause = document.getElementById("pause")
    pause.addEventListener("click", () => {

        if(pause.innerText === "resume") {
            pause.innerText = "pause"
            interval = setInterval(incrementCounter, 1000)
        } else {
            pause.innerText = "resume"
            clearInterval(interval)
            
        }

        document.getElementById("plus").disabled = !plus.disabled; // or simply plus.disabled = true instead of document.getElementById("plus").disabled = true.
        document.getElementById("minus").disabled = !minus.disabled; // or minus.disabled = true
        document.getElementById("heart").disabled = !heart.disabled; // ect. 
        document.getElementById("submit").disabled = !submit.disabled; // ect.
    }) 

       let commentForm = document.querySelector("#comment-form")
       commentForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const list = document.getElementById("list")    
        let li = document.createElement("li")
        li.innerText = event.target[0].value // (event.target[0].value) this gives us the actual value of the input or what we type into the submit button. 
        list.appendChild(li)

        commentForm.reset() // resets the form to blank. to the original empty string. So when type something in, it appends to the dom and goes back to blank. 
    })

});

function counter() {
    incrementCounter()
}

function incrementCounter() {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) +1
}


function decrementCounter() {
    let deCount = document.getElementById("counter")
    deCount.textContent = parseInt(deCount.textContent, 10) -1
}









