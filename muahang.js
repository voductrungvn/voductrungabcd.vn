const btn =  document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("h1").innerText
    var productPrice = product.querySelector("span").innerText
    // console.log(productName,productImg,productPrice)
    addcart(productName,productImg,productPrice)

}})    




})
function addcart(productName,productImg,productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i =0; i<cartItem.length;i++){
        var productT = document.querySelectorAll("title")
        if (productT[i].innerHTML==productName){
            alert("Sản phẩm của bạn đã có trong giỏ hang")
            return
        }
    }


    var trcontent = '<tr><td style="display:flex; align-items: center;" ><img src="'+productImg+'"  alt="" width="250px"><span class=title >'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="0" ></td><td style="cursor:pointer;" >Xóa</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)

    carttotal()


}
function carttotal (){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    //console.log(cartItem.length)
    for (var i =0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML 
        console.log(productPrice)
        totalA = inputValue*productPrice*1000
    
        //total = Math.round(totalA)
        //totalB = totalA.toLocaleString('de-DE')
        //console.log(totalB)
        totalC = totalC + totalA
        console.log(totalC)
        totalD = totalC.toLocaleString('de-DE')

    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC
}
