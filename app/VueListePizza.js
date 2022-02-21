class VueListePizza{
    constructor(){
      this.html = document.getElementById("html-vue-liste-pizza").innerHTML;
      this.listePizzaDonnee = null;
    }
  
    initialiserListePizza(listePizzaDonnee){
      this.listePizzaDonnee = listePizzaDonnee;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
  
      let listePizza = document.getElementById("liste-pizza");
      const listePizzaItemHTML = listePizza.innerHTML;
      let listePizzaHTMLRemplacement = "";
  
      for(var numeroPizza in this.listePizzaDonnee){
        let listePizzaItemHTMLRemplacement = listePizzaItemHTML;
        listePizzaItemHTMLRemplacement = listePizzaItemHTMLRemplacement.replace("{Pizza.id}",this.listePizzaDonnee[numeroPizza].id);
        listePizzaItemHTMLRemplacement = listePizzaItemHTMLRemplacement.replace("{Pizza.nom}",this.listePizzaDonnee[numeroPizza].nom);
        listePizzaHTMLRemplacement += listePizzaItemHTMLRemplacement;
      }
  
      listePizza.innerHTML = listePizzaHTMLRemplacement;
    }
  
  }
  