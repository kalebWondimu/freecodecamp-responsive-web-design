btn=document.getElementsByClassName('btn')

window.addEventListener('keydown', function(k){
   if(k.key === 'a' || k.key === 'A'){
       btn[0].style.backgroundColor= 'grey';
       new Audio('Audio/c.wav').play();
   }

   else if(k.key === 'w' || k.key === 'W'){
       btn[1].style.backgroundColor= '#333';
       new Audio('Audio/c-sharp.wav').play();
   }

   
   else if(k.key === 's' || k.key === 'S'){
       btn[2].style.backgroundColor= 'grey';
       new Audio('Audio/d.wav').play();
   }

   else if(k.key === 'e' || k.key === 'E'){
       btn[3].style.backgroundColor= '#333';
       new Audio('Audio/e-sharp.wav').play();
  }

   else if(k.key === 'd' || k.key === 'D'){
       btn[4].style.backgroundColor= 'grey';
       new Audio('Audio/e.wav').play();
 }

   else if(k.key === 'f' || k.key === 'F'){
       btn[5].style.backgroundColor= 'grey';
       new Audio('Audio/f.wav').play();
}

   else if(k.key === 't' || k.key === 'T'){
       btn[6].style.backgroundColor= '#333';
       new Audio('Audio/f-sharp.wav').play();
}
   
   
   else if(k.key === 'g' || k.key === 'G'){
       btn[7].style.backgroundColor= 'grey';
       new Audio('Audio/g.wav').play();
 }

   else if(k.key === 'y' || k.key === 'Y'){
       btn[8].style.backgroundColor= '#333'
       new Audio('Audio/g-sharp.wav').play();
 }

   else if(k.key === 'h' || k.key === 'H'){
       btn[9].style.backgroundColor= 'grey';
       new Audio('Audio/a.wav').play();
  }

   else if(k.key === 'u' || k.key === 'U'){
       btn[10].style.backgroundColor= '#333';
       new Audio('Audio/a-sharp.wav').play();
}

   else if(k.key === 'j' || k.key === 'J'){
       btn[11].style.backgroundColor= 'grey';
       new Audio('Audio/b.wav').play();
   }

   else if(k.key === 'k' || k.key === 'K'){
       btn[12].style.backgroundColor= 'grey';
       new Audio('Audio/k.wav').play();
   }
   
  
   
})

window.addEventListener('keyup', function(k){
   
     if(k.key === 'a' || k.key === 'A'){
          btn[0].style.backgroundColor= '#fff';
        
      }
   
      else if(k.key === 'w' || k.key === 'W'){
          btn[1].style.backgroundColor= '#000';
          
      }
   
      
      else if(k.key === 's' || k.key === 'S'){
          btn[2].style.backgroundColor= '#fff';
          
      }
   
      else if(k.key === 'e' || k.key === 'E'){
          btn[3].style.backgroundColor= '#000';
          
     }
   
      else if(k.key === 'd' || k.key === 'D'){
          btn[4].style.backgroundColor= '#fff';
        
    }
   
      else if(k.key === 'f' || k.key === 'F'){
          btn[5].style.backgroundColor= '#fff';
      
   }
   
      else if(k.key === 't' || k.key === 'T'){
          btn[6].style.backgroundColor= '#000';
          
   }
      
      
      else if(k.key === 'g' || k.key === 'G'){
          btn[7].style.backgroundColor= '#fff';
          
    }
   
      else if(k.key === 'y' || k.key === 'Y'){
          btn[8].style.backgroundColor= '#000';
        
    }
   
      else if(k.key === 'h' || k.key === 'H'){
          btn[9].style.backgroundColor= '#fff';
          
     }
   
      else if(k.key === 'u' || k.key === 'U'){
          btn[10].style.backgroundColor= '#000';
          
   }
   
      else if(k.key === 'j' || k.key === 'J'){
          btn[11].style.backgroundColor= '#fff';
          new Audio('Audio/j.wav').play();
      }
   
      else if(k.key === 'k' || k.key === 'K'){
          btn[12].style.backgroundColor= '#fff';
          
      }
      
     
   
})


const hideLabelsBtn = document.getElementById('hide-labels');

let labelsVisible = true;

hideLabelsBtn.addEventListener('click', () => {
labelsVisible = !labelsVisible;

const labels = document.querySelectorAll('.key-label, .note-label');

labels.forEach(label => {
   label.style.display = labelsVisible ? 'block' : 'none';
});

hideLabelsBtn.textContent = labelsVisible ? 'Hide Labels' : 'Show Labels';
});