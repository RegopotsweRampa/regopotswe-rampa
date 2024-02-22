var button1 = document.getElementById("button1");
function handleClick(event){
    event.preventDefault();

    console.log("Explore button is disabled.");
}
button1.addEventListener("click",handleClick);