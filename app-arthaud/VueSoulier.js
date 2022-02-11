class VueSoulier{
    constructor(){
      this.html = document.getElementById("html-vue-soulier").innerHTML;
      this.soulier = null;
    }
  
    initialiserSoulier(soulier){
      this.soulier = soulier;
    }
  
    afficher(){
      document.getElementsByTagName("body")[0].innerHTML = this.html;
      document.getElementById("soulier-nom").innerHTML = this.soulier.nom;
      document.getElementById("soulier-marque").innerHTML = this.soulier.marque;
      document.getElementById("soulier-description").innerHTML = this.soulier.description;
      document.getElementById("soulier-couleur").innerHTML = this.soulier.couleur;
      document.getElementById("soulier-materiaux").innerHTML = this.soulier.materiaux;
      document.getElementById("soulier-pourQui").innerHTML = this.soulier.pourQui;
      document.getElementById("soulier-pointure").innerHTML = this.soulier.pointure;
      document.getElementById("soulier-fermeture").innerHTML = this.soulier.fermeture;
      document.getElementById("soulier-id").innerHTML = this.soulier.id;
    }
  
  }
  