//Griglia 6x6,
//ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
//Se il num ritornato è <= 5 il quadrato diventa giallo,
//se è > di 5 il quadrato diventa verde.
//Il numero ottenuto appare al centro del quadrato

$(document).ready(function(){

  $('.quadrato').click(function(){
    var self = $(this);
    $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data) {
          if(data.response <= 5){
            self.addClass("giallo");
          } else {
            self.addClass("verde");
          }
          self.text(data.response).addClass("numero");
        },
        error : function (richiesta,stato,errori) {
          console.log("E' avvenuto un errore. " + errori, "stato " + stato, richiesta);
        }
    });
  });
});
