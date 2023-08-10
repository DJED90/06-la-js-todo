export function menu(){
    const menus = document.querySelectorAll("#menutroispoints");
    const renames = document.querySelectorAll("#rename");
    const suprs = document.querySelectorAll("#delete");
    const meenus = document.querySelectorAll("menu");
    
    menus.forEach((menu, index) => {
        menu.addEventListener("click", (e) => {
            if(renames[index].style.display === "none" && suprs[index].style.display === "none"){
                renames[index].style.display = "block";
                suprs[index].style.display = "block";
                menu.parentElement.style.marginTop = "80px";
            }
            else {
                renames[index].style.display = "none";
                suprs[index].style.display = "none";
                menu.parentElement.style.marginTop = "20px";
            }
        });
    });
};
