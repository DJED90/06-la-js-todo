export function menu(){
    const menu = document.querySelector("#menutroispoints");
    const rename = document.querySelector("#rename");
    const supr = document.querySelector("#delete");
    menu.addEventListener("click", (e) => {
        if(rename.style.display == "none" && supr.style.display == "none"){
            rename.style.display = "block";
            supr.style.display = "block";
            
        }
        else {
            rename.style.display = "none";
            supr.style.display = "none";
        }

    })
}