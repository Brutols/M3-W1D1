let twitterRemove = function() {
    let twitter = document.querySelector(".blog-sidebar .p-4:nth-child(3) ol li:nth-child(2)")
    twitter.style.display = "none"
}

twitterRemove()

let authors = document.querySelectorAll(".blog-post p:first-of-type a")

let authorHover = function(ev) {
    alert(ev.target.innerText)
}

for (let i = 0; i < authors.length; i++) {
    authors[i].onmouseover = authorHover
}

let removeParent = function(ev) {
    ev.preventDefault()
    let selector = ev.target.closest(".col-md-6")
    if (selector) {
        selector.remove()
    }
}

let linkToClick = document.querySelectorAll(".stretched-link")

for (let i = 0; i < linkToClick.length; i++) {
    linkToClick[i].onclick = removeParent
}

let linkToClick2 = document.querySelector(".jumbotron p a")
linkToClick2.onclick = removeParent