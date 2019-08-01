var canvas = new fabric.Canvas('c');

function Salle(uneLongueur, uneHauteur){
	this.longueur=uneLongueur;
	this.hauteur=uneHauteur;
	
	uneGrille=new Array();

	for(var i=1; i<=this.longueur;i++){
		uneGrille[i]=new Array();
		uneGrille[i].length=uneHauteur;
	}
	//uneGrille[1][7]=3;
  for(var i=1; i<=this.longueur;i++){
    for (var j=1;j<=this.hauteur;j++){
      uneGrille[i][j]=new Place(1, 1, 1);
    }
  }

	this.grille=uneGrille;

}
Salle.prototype.getGrille = function(){
  return this.grille;
}

Salle.prototype.getGrilleCase = function(uneLongueur, uneHauteur){
	return this.grille[uneLongueur][uneHauteur];
}

Salle.prototype.setGrilleCase = function (uneLongueur, uneHauteur, valeur){
	this.grille[uneLongueur][uneHauteur]=valeur;

}

Salle.prototype.getLongueur = function(){
  return this.longueur;
}

Salle.prototype.setGrille = function (uneLongueur){
  this.longueur=uneLongueur;
} 

Salle.prototype.getHauteur = function(){
  return this.hauteur;
}

Salle.prototype.setHauteur = function (uneHauteur){
  this.hauteur=uneHauteur;
} 

function Place(zone, bloc, tier){
	this.zone=zone;
	this.bloc=bloc;
	this.tier=tier;
	this.reservation=1;
}

Place.prototype.getZone = function(){
  return this.zone;
}

Place.prototype.setZone = function (uneZone){
  this.zone=uneZone;
} 

Place.prototype.getBloc = function(){
  return this.bloc;
}

Place.prototype.setBloc = function (unBloc){
  this.bloc=unBloc;
} 

Place.prototype.getTier = function(){
  return this.tier;
}

Place.prototype.setTier = function (unTier){
  this.tier=unTier;
} 

Place.prototype.getReservation = function(){
  return this.reservation;
}

Place.prototype.setReservation = function (uneReservation){
  this.reservation=uneReservation;
} 

var salle1 = new Salle(10,5);
//console.log(salle1.longueur+', '+salle1.hauteur);
//console.log(salle1.getGrille());
//console.log(salle1.getLongueur());
//console.log(salle1.getGrilleCase(1, 2).getReservation());

function afficherChaise(){
  var x=10;
    for(var i=1; i<=salle1.getLongueur();i++){
      var y=10;
      for (var j=1;j<=salle1.getHauteur();j++){      
        if ((salle1.getGrilleCase(i, j)!== 'undefined') & (salle1.getGrilleCase(i, j).getReservation()!= 0)) {
          add(x, y);
        }
      var y=y+50;
      }
    var x=x+50;
  }
}

function add(posX, posY){
  fabric.Image.fromURL('../images/chair.png', function(img) {
  img.scale(0.2).set({
    left: posX,
    top: posY,
    angle: 0
  });
  canvas.add(img).setActiveObject(img);
});
}

function supprimerChaise(){
  canvas.getActiveObjects().forEach((obj) => {
  canvas.remove(obj)
});
canvas.discardActiveObject().renderAll()
} 

var canvasWrapper = document.getElementById('canvasWrap');
canvasWrapper.tabIndex = 1000;
canvasWrapper.addEventListener("keydown", supprimerChaise, false);

