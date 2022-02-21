class Application {
  constructor(window, vueListePizza, vuePizza, vueAjouterPizza, pizzaDAO){

    this.window = window;

    this.vueListePizza = vueListePizza;

    this.vuePizza = vuePizza;

    this.vueAjouterPizza = vueAjouterPizza;
    // C'est l'équivalent de function(pizza){this.ajouterPizza(pizza)}
    this.vueAjouterPizza.initialiserAjouterPizza(pizza =>this.ajouterPizza(pizza));

    this.pizzaDAO = pizzaDAO;

    // C'est l'équivalent de function(){this.naviguer()}
    this.window.addEventListener("hashchange", () =>this.naviguer());

    this.naviguer();
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.pizzaDAO.lister((listePizza) => this.afficherNouvelleListePizza(listePizza));

    }else if(hash.match(/^#ajouter-pizza/)){

      this.vueAjouterPizza.afficher();

    }else{

      let navigation = hash.match(/^#pizza\/([0-9]+)/);
      let idPizza = navigation[1];

      this.pizzaDAO.chercher(idPizza, (pizza) => this.afficherNouveauPizza(pizza));
    }
  }

  afficherNouvelleListePizza(listePizza){

    console.log(listePizza);
    this.vueListePizza.initialiserListePizza(listePizza);
    this.vueListePizza.afficher();
  }

  afficherNouveauPizza(pizza){
    console.log(pizza);
    this.vuePizza.initialiserPizza(pizza);
    this.vuePizza.afficher();
  }

  ajouterPizza(pizza){
    this.pizzaDAO.ajouter(pizza, () => this.afficherListePizza());
  }

  afficherListePizza(){
    this.window.location.hash = "#";
  }
}

new Application(window, new VueListePizza(), new VuePizza(), new VueAjouterPizza(), new PizzaDAO());

