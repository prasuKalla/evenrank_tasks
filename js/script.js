
//Task 1

var pics = [
  "./img/p1.jpg",
  "./img/p2.jpg",
  "./img/p3.jpg",
  "./img/p4.jpg",
  "./img/p5.jpg"
];

var curImg= 0;

function rightClick() {
  curImg = (curImg + 1) % pics.length;
   document.getElementById("pic").src = pics[curImg];
}

function leftClick() {
   if(curImg <= 0 || curImg>pics.length){
   	curImg=4;
   }
	else if(curImg>0 && curImg<=pics.length){
	  	curImg-=1;
	  }
   
   document.getElementById("pic").src = pics[curImg];
}


 setInterval("changeImg()", 60000);
     var curImg=0;

     function changeImg() {
                document.getElementById("pic").src=pics[curImg];
                curImg++;
                if (pics.length == curImg) 
                {
                    curImg= 0;
                    
                }
           }


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