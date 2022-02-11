class SoulierDAO{
    lister(action){
      fetch("https://xmbtkfs4xi.execute-api.us-east-1.amazonaws.com/default/lister", {mode:'cors'})
        .then(response => response.json())
        .then(data =>
          {
            console.log(data);
            let listeSoulier = [];
            for(let position in data){
              let soulier = new Soulier(data[position].nom,
                                        data[position].marque,
                                        data[position].description,
                                        data[position].couleur,
                                        data[position].materiaux,
                                        data[position].pourQui,
                                        data[position].pointure,
                                        data[position].fermeture,
                                        data[position].id);
  
              console.log(soulier);
              listeSoulier.push(soulier);
            }
            action(listeSoulier);
          });
    }
    chercher(id, action){
      fetch("https://ulofr45hp0.execute-api.us-east-1.amazonaws.com/default/chercher-par-id" + '?id=' + id , {mode:'cors'})
        .then(response => response.json())
        .then(data =>
          {
            console.log(data);
            let soulier = new Soulier(data.nom,
                                        data.marque,
                                        data.description,
                                        data.couleur,
                                        data.materiaux,
                                        data.pourQui,
                                        data.pointure,
                                        data.fermeture,
                                        data.id);
            action(soulier);
          });
    }
    ajouter(soulier, action){
      console.log(JSON.stringify(soulier));
      fetch("https://r6t9t63tck.execute-api.us-east-1.amazonaws.com/default/ajouter",
        {
          method: 'POST',
          headers: {
            'Content-Type':'application/x-www-form-urlencoded'
          },
          body: "soulierjson=" + JSON.stringify(soulier),
          mode:'cors',
        })
        .then(response => response.text())
        .then(data =>
          {
            console.log('Détail:', data);
            action();
          });
    }
  }
  