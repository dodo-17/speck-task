window.onload = () => {

    let tecnology = document.getElementById("technologies");
    let input = document.getElementById("input");

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("addButton").click();
        }
      });

    document.getElementById("addButton").addEventListener("click", () => {
        
        let inputText = input.value;

        
        if (inputText != "") {

            let el = document.createElement("div");
            el.innerText = inputText;
            el.setAttribute('class', 'technology');
            
            tecnology.appendChild(el);
            input.value = "";
        }
        
    });

    document.getElementById("remove").addEventListener("click", () => {
        tecnology.innerHTML = "";
    });
}
