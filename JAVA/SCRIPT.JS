var allproducts =document.querySelectorAll("   .section2  .card .card-img-top   ")
var content =document.querySelector( "#content")
var bt1=document.querySelector( "#bt1")
var del =document.querySelector("#del")
var totalprice=0



allproducts.forEach(function(item){
    item.onclick =function(){
        totalprice += +(item.getAttribute('price1'))
        content.innerHTML += item.textContent +"<br>"
        if(content.innerHTML !=""){

            bt1.style.display="block"
            bt1.style.backgroundColor="aqua"
            bt1.style.color="#fff"
            bt1.style.width="150px"
            bt1.style.height="35px"
del.style.display="block"
        }

        
    }
})
bt1.onclick=function(){
 
 document.write( totalprice)


}
del.onclick=function(){
content.innerHTML=""
del.style.display="none"
console.log(totalprice=0)
}