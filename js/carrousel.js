(function(){
    console.log('Début du carrousel')
    let carrousel__ouvrir = document.querySelector('.carrousel__ouvrir')
    let carrousel = document.querySelector('.carrousel')
    let carrousel__x = document.querySelector('.carrousel__x')
    let carrousel__figure = document.querySelector('.carrousel__figure')
    let carrousel__form = document.querySelector('.carrousel__form')
    let carrousel__next = document.querySelector('.carrousel__next')
    let carrousel__back = document.querySelector('.carrousel__back')
    console.log(carrousel__form.tagName) //Conteneur de radio-boutons

    let galerie = document.querySelector('.galerie')
    let galerie__img = galerie.querySelectorAll('img')

    carrousel__ouvrir.addEventListener('mousedown', function(){
         carrousel.classList.add('carrousel--activer')
         ajouter_les_images_de_galerie()
    
    })

    carrousel__x.addEventListener('mousedown', function(){
        carrousel.classList.remove('carrousel--activer')
   })
/**
 * Pour chaque image de la galerie l'ajouter dans le carrousel 
 */
   let position = 0
   let index = 0
   let ancienIndex = -1
   function ajouter_les_images_de_galerie()
   {

     for(const elem of galerie__img){
      ajouter_une_image_dans_carrousel(elem)
      console.log('position : '+ position)
      ajouter_des_radioBoutons_dans_carrousel()
     }
   }
/**
 * Création dynamique d'une image pour le carrousel 
 * @param {*} elem une image de la galerie
 */
function ajouter_une_image_dans_carrousel(elem)
{
   let img = document.createElement('img')
        img.classList.add('carrousel__img')
        img.src = elem.getAttribute('src')
        
       // console.log(img.src)
        carrousel__figure.appendChild(img)
}

function ajouter_des_radioBoutons_dans_carrousel()
{
  let rad = document.createElement('input')
  rad.setAttribute('type','radio')
  rad.setAttribute('name','carrousel__rad')
  rad.classList.add('carrousel__rad')
  rad.dataset.index = position
  rad.addEventListener('mousedown', function(){
     index = this.dataset.index
     affiche_image_carrousel()


  })
  position = position + 1; // incrémentation de la position 
  carrousel__form.append(rad)
}
/**
 * Affiche la nouvelle image du carrousel 
 */
function affiche_image_carrousel(){
  if(ancienIndex != -1){
    carrousel__figure.children[ancienIndex].style.opacity = "0";
    carrousel__form.children[ancienIndex].checked = false;
    //carrousel__figure.children[ancienIndex].classList.remove('carrousel__img--activer')
  }
  //console.log(this.dataset.index)
  carrousel__figure.children[index].style.opacity = "1";
  carrousel__form.children[Index].checked = true;
  //carrousel__figure.children[index].classList.add('carrousel__img--activer')
  ancienIndex = index;
}

carrousel__next.addEventListener('mousedown', function(){

  index = index + 1;

  if(carrousel__form[index].length == 3){
       index = 0;
  }

  affiche_image_carrousel();

})

carrousel__back.addEventListener('mousedown', function(){

  index = index - 1;

  if(carrousel__form[index].length == 3){
       index = 0;
  }

  affiche_image_carrousel();

})
})()