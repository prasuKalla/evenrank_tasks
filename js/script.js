
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
                if (pics.length == curImg) {
                    curImg= 0;              
                }
           }








