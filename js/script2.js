//Task 2

   var curGrid=0;
      
      $(function () {
            $('#changeBtn').click(function () {
               $('.grid').css('display', 'none');
               curGrid = (curGrid + 1) % 6;
               $('.grid#grid'+curGrid).css('display', 'block');
               
        });
    });


      setInterval("changeGrid()", 60000);
       var curGrid=0;

           function changeGrid() {                
                  curGrid++;

                  if (curGrid == 6) {
                     curGrid= 0;                      
                  }

                  $('.grid').css('display', 'none');
                  $('.grid#grid'+curGrid).css('display', 'block');
             }
