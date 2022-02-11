class SoulierDAO{
    lister(action){
      fetch("https://bbfvl7zead.execute-api.us-east-1.amazonaws.com/default/lister-soulier", {mode:'cors'})
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
      fetch("https://rm69nms37l.execute-api.us-east-1.amazonaws.com/default/chercher-par-id-soulier" + '?id=' + id , {mode:'cors'})
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
      fetch("https://nrn0ys971g.execute-api.us-east-1.amazonaws.com/default/ajouter-soulier",
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
  