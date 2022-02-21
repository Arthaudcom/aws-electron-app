class VuePizza{
    constructor(){
      this.html = document.getElementById("html-vue-pizza").innerHTML;
      this.pizza = null;
    }
  
    initialiserPizza(pizza){
      this.pizza = pizza;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      document.getElementById("pizza-nom").innerHTML = this.pizza.nom;
      document.getElementById("pizza-base").innerHTML = this.pizza.base;
      document.getElementById("pizza-description").innerHTML = this.pizza.description;
      document.getElementById("pizza-prixPetite").innerHTML = this.pizza.prixPetite;
      document.getElementById("pizza-prixMoyenne").innerHTML = this.prixMoyenne;
      document.getElementById("pizza-prixGrande").innerHTML = this.pizza.prixGrande;
      document.getElementById("pizza-id").innerHTML = this.pizza.id;
    }
  
  }
  