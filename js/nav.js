/*
 * @Author: 梧杺
 * @Date:   2020-06-30 19:56:59
 * @Last Modified by:   梧杺
 * @Last Modified time: 2020-06-30 21:02:04
 */

 var lis= document.querySelectorAll(".nav-li");
 var zbc= document.querySelector(".zbc");
 var lg= document.querySelector(".nav-logo");

 for(var i=0;i<lis.length;i++){
    lis[i].onmoseover(function(){
        if(zbc.style.display="none"){
                zbc.style.display="block";
                lg.style.display="none";
        }else if(zbc.style.display="block"){
                zbc.style.display="none";
                lg.style.display="block";
        }
    })
 }
 