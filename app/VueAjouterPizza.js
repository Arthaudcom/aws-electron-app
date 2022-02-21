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
      let marque = document.getElementById("pizza-marque").value;
      let description = document.getElementById("pizza-description").value;
      let couleur = document.getElementById("pizza-couleur").value;
      let materiaux = document.getElementById("pizza-materiaux").value;
      let fermeture = document.getElementById("pizza-fermeture").value;
      let pourQui = document.getElementById("pizza-pourQui").value;
      let pointure = document.getElementById("pizza-pointure").value;
  
      this.ajouterPizza(new Pizza(nom, marque, description, couleur, materiaux, pourQui, pointure, fermeture,  null));
  
    }
  
  }