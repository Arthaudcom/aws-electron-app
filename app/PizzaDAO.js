class PizzaDAO{
    lister(action){
      fetch("https://llnsnv1i2c.execute-api.us-east-1.amazonaws.com/default/lister", {mode:'cors'})
        .then(response => response.json())
        .then(data =>
          {
            console.log(data);
            let listePizza = [];
            for(let position in data){
              let pizza = new Pizza(data[position].nom,
                                        data[position].base,
                                        data[position].description,
                                        data[position].ingredients,
                                        data[position].prixPetite,
                                        data[position].prixMoyenne,
                                        data[position].prixGrande,
                                        data[position].id);
  
              console.log(pizza);
              listePizza.push(pizza);
            }
            action(listePizza);
          });
    }
    chercher(id, action){
      fetch("https://ybox9a7zue.execute-api.us-east-1.amazonaws.com/default/chercher-par-id" + '?id=' + id , {mode:'cors'})
        .then(response => response.json())
        .then(data =>
          {
            console.log(data);
            let pizza = new Pizza(data.nom,
                                        data.base,
                                        data.description,
                                        data.ingredients,
                                        data.prixPetite,
                                        data.prixMoyenne,
                                        data.prixGrande,
                                        data.id);
            action(pizza);
          });
    }
    ajouter(pizza, action){
      console.log(JSON.stringify(pizza));
      fetch("https://2cl9ugpgu6.execute-api.us-east-1.amazonaws.com/default/ajouter",
        {
          method: 'POST',
          headers: {
            'Content-Type':'application/x-www-form-urlencoded'
          },
          body: "pizzajson=" + JSON.stringify(pizza),
          mode:'cors',
        })
        .then(response => response.text())
        .then(data =>
          {
            console.log('D??tail:', data);
            action();
          });
    }
  }
  