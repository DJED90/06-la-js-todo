export function menu(){
    const menus = document.querySelectorAll(".menutroispoints");
    const renames = document.querySelectorAll(".rename");
    const suprs = document.querySelectorAll(".delete");
    const changes = document.querySelectorAll(".change");
    
    menus.forEach((menu, index) => {
        menu.addEventListener("click", () => {
            if(renames[index].style.display === "none" && suprs[index].style.display === "none" && changes[index].style.display === "none"){
                renames[index].style.display = "block";
                suprs[index].style.display = "block";
                changes[index].style.display = "block";
                menu.parentElement.style.marginTop = "80px"; 
            }
            else {
                renames[index].style.display = "none";
                suprs[index].style.display = "none";
                changes[index].style.display = "none";
                menu.parentElement.style.marginTop = "20px";
            }
        });
    });
};
