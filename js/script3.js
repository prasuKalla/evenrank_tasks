//Task 3


const searchUrl='https://restcountries.eu/rest/v2/name/';
var res_name = null;
var res_flag = null;



$(document).ready(function(){
   
      $("#searchBtn").click(function(){

       var searchCountry = $("#inputBox").val();

       if(!searchCountry)
         return;

        var Url= searchUrl+searchCountry;

        //alert(Url);
               
          $.get(Url, function(data){
             
             // var obj=JSON.stringify(data);
                
                for(var i=0;i<data.length;i++){

                     var item=data[i];

                     for(key in item){
                        if(key=="name"){  
                           res_name = item[key];                                               
                        }
                    }

                    for(key in item){
                        if(key=="flag"){
                         res_flag=item[key];                                          
                        }
                    }                  

                    var srchId="result"+(i+2);
                  
                    $("#displayBox").append('<div class="row"><div class="col-md-2"></div><div class="col-md-2"></div><div class="col-md-2">'+res_name+'</div><div class="col-md-2"><img src='+res_flag+'></div></div><br>');


                }//end of main for loop               
           
               
          });
      });
  });




                          // document.getElementById("displayBox").innerHTML= "<div class="row">\
                         //          <div class="col-md-2"></div>\
                         //          <div class="col-md-2"></div>\                              
                         //          <div class="col-md-2">"+res_name+"</div>\                             
                         //          <div class="col-md-2">\
                         //           <img src="+res_flag+">\
                         //          </div>\     
                         //        </div><br>" 



