console.log("1");

document.querySelector(".button-container").addEventListener("click", function(event){
    if (event.target.tagName === "button"){
        alert(`You clicked on button ${event.target.innerText}`);
    }
});