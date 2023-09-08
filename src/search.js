export function search() {
    const searchInput = document.querySelector("#wordsearch");
    const searchButton = document.querySelector("#wordsubmit");
    const tasks = document.querySelectorAll("#task");
  
    searchButton.addEventListener("click", () => {
      // Convertir le terme de recherche en minuscules pour une comparaison insensible à la casse
      const searchTerm = searchInput.value.toLowerCase(); 
      
      tasks.forEach(task => {
        // Convertir le texte de la tâche en minuscules pour une comparaison insensible à la casse
        const taskText = task.textContent.toLowerCase(); 
        const li = task.parentElement; 
  
        if (taskText.includes(searchTerm)) {
          // Afficher la tâche si elle correspond au terme de recherche
          li.style.display = "grid"; 
        } else {
          // Masquer la tâche si elle ne correspond pas au terme de recherche
          li.style.display = "none"; 
        }
      });
    });
  }
  