const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {/* ele monitora o evendo e adiciona o nome da classe */
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];/* procura os campos  */

  fields.forEach(field => {/*se em cada campo que ele olhar estiver vazio ele vai adicionar ao formulario inteiro como validade errorr*/
    if (field.value === "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
});

form.addEventListener("animationstart", event => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", event => {/* ele pega o evendo e cria uma função que faz o form sumir */
  if (event.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});

  /* squares*/

  const ulSquares = document.querySelector("ul.squares");/*seliciona  */

  for (let i = 0; i < 11; i++) {/*cria  */
      const li = document.createElement("li");
      
      const randow = (min,max) => Math.random() * (max - min) + min;

      const size = Math.floor(randow(10,120));
      const position = randow(1,99) 
      const dalay = randow(5, 0.1);
      const duracao = randow(24,12);

      li.style.width =`${size}px`;
      li.style.height = `${size}px`;
      li.style.bottom =`-${size}px`;

      li.style.left = `${position}%`;

      li.style.animationDelay =`${dalay}s`;
      li.style.animationDirection =`${duracao}s`;


      li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`
    

      ulSquares.appendChild(li);
      
  }