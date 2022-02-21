class VueAjouterPizza{
    constructor(){
      this.html = document.getElementById("html-vue-ajouter-pizza").innerHTML;
      this.ajouterPizza = null;
    }
  
    initialiserAjouterPizza(ajouterPizza){
      this.ajouterPizza = ajouterPizza;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      document.getElementById("formulaire-ajouter").addEventListener("submit",evenement =>this.enregistrer(evenement));
    }
  
    enregistrer(evenement){
      evenement.preventDefault();
  
      let nom = document.getElementById("pizza-nom").value;
      let base = document.getElementById("pizza-base").value;
      let description = document.getElementById("pizza-description").value;
      let ingredients = document.getElementById("pizza-ingredients").value;
      let prixPetite = document.getElementById("pizza-prixPetite").value;
      let prixMoyenne = document.getElementById("pizza-prixMoyenne").value;
      let prixGrande = document.getElementById("pizza-prixGrande").value;
  
      this.ajouterPizza(new Pizza(nom, base, description, ingredients, prixPetite, prixMoyenne, prixGrande,  null));
  
    }
  
  }