class VueListeSoulier{
    constructor(){
      this.html = document.getElementById("html-vue-liste-soulier").innerHTML;
      this.listeSoulierDonnee = null;
    }
  
    initialiserListeSoulier(listeSoulierDonnee){
      this.listeSoulierDonnee = listeSoulierDonnee;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
  
      let listeSoulier = document.getElementById("liste-soulier");
      const listeSoulierItemHTML = listeSoulier.innerHTML;
      let listeSoulierHTMLRemplacement = "";
  
      for(var numeroSoulier in this.listeSoulierDonnee){
        let listeSoulierItemHTMLRemplacement = listeSoulierItemHTML;
        listeSoulierItemHTMLRemplacement = listeSoulierItemHTMLRemplacement.replace("{Soulier.id}",this.listeSoulierDonnee[numeroSoulier].id);
        listeSoulierItemHTMLRemplacement = listeSoulierItemHTMLRemplacement.replace("{Soulier.nom}",this.listeSoulierDonnee[numeroSoulier].nom);
        listeSoulierHTMLRemplacement += listeSoulierItemHTMLRemplacement;
      }
  
      listeSoulier.innerHTML = listeSoulierHTMLRemplacement;
    }
  
  }
  