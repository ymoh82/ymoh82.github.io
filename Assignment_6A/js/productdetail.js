function ChangeSize(){
  let btnxs = document.getElementById('btn-xs');
  btnxs.style.backgroundColor = "Black";
  btnxs.style.color = "White"
  document.getElementById('p-size').innerHTML = "X-Small: 8 to 11-in chest";
  document.getElementById('btn-s').removeAttribute("style");
  document.getElementById('btn-m').removeAttribute("style");
  document.getElementById('btn-l').removeAttribute("style");
}

function ChangeSize1(){
  let btns = document.getElementById('btn-s');
  btns.style.backgroundColor = "Black";
  btns.style.color = "White";
  document.getElementById('p-size').innerHTML = "Small: 11 to 15-in chest";
  document.getElementById('btn-xs').removeAttribute("style");
  document.getElementById('btn-m').removeAttribute("style");
  document.getElementById('btn-l').removeAttribute("style");
}

function ChangeSize2(){
  let btnm = document.getElementById('btn-m');
  btnm.style.backgroundColor = "Black";
  btnm.style.color = "White"
  document.getElementById('p-size').innerHTML = "Medium: 15 to 21-in chest";
  document.getElementById('btn-xs').removeAttribute("style");
  document.getElementById('btn-s').removeAttribute("style");
  document.getElementById('btn-l').removeAttribute("style");
}

function ChangeSize3(){
  let btnl = document.getElementById('btn-l');
  btnl.style.backgroundColor = "Black";
  btnl.style.color = "White"
  document.getElementById('p-size').innerHTML = "Large: 21 to 26-in chest";
  document.getElementById('btn-xs').removeAttribute("style");
  document.getElementById('btn-s').removeAttribute("style");
  document.getElementById('btn-m').removeAttribute("style");
}


function ChangeColor(){
  let dot1 = document.getElementById('dotb');
  dot1.style.border = "black 4px solid";
  document.getElementById('p-color').innerHTML = ": Blue";
  document.getElementById('dotdb').removeAttribute("style");
  document.getElementById('dotbr').removeAttribute("style");
  document.getElementById('main_img').style.backgroundImage = "url(muddypaw_img/item3.jpg)";
  document.getElementById('sub_img1').style.backgroundImage = "url(muddypaw_img/lbsub1.png)";
  document.getElementById('sub_img2').style.backgroundImage = "url(muddypaw_img/lbsub2.png)";
  document.getElementById('sub_img3').style.backgroundImage = "url(muddypaw_img/lbsub3.png)";
}
      

function ChangeColor1(){
  let dot2 = document.getElementById('dotdb');
  dot2.style.border = "black 4px solid";
  document.getElementById('p-color').innerHTML = ": Dark Blue";
  document.getElementById('dotb').removeAttribute("style");
  document.getElementById('dotbr').removeAttribute("style");
  document.getElementById('main_img').style.backgroundImage = "url(muddypaw_img/bluemain.png)";
  document.getElementById('sub_img1').style.backgroundImage = "url(muddypaw_img/sub1.png)";
  document.getElementById('sub_img2').style.backgroundImage = "url(muddypaw_img/sub2.png)";
  document.getElementById('sub_img3').style.backgroundImage = "url(muddypaw_img/sub3.png)";
}

function ChangeColor2(){
  let dot3 = document.getElementById('dotbr');
  dot3.style.border = "black 4px solid";
  document.getElementById('p-color').innerHTML = ": Brown";
  document.getElementById('dotb').removeAttribute("style");
  document.getElementById('dotdb').removeAttribute("style");
  document.getElementById('main_img').style.backgroundImage = "url(muddypaw_img/brownmain.png)";
  document.getElementById('sub_img1').style.backgroundImage = "url(muddypaw_img/brownsub1.png)";
  document.getElementById('sub_img2').style.backgroundImage = "url(muddypaw_img/brownsub2.png)";
  document.getElementById('sub_img3').style.backgroundImage = "url(muddypaw_img/brownsub3.png)";
}



var productArr = []

//A product class for items you can purchase
class Product {
	constructor(size, color) {
		this.size = size
		this.color = color
	}
}

function addToCart() {
  var size = document.getElementsByName('size');
  //size is an array of the four inputs from HTML page

  
	var color = document.getElementsByName("color");
  //color is an array of the three inputs from our HTML page

		
	
  var item = new Product(size, color);
  productArr.push(item);
  //Set the product order in local storage
	window.localStorage.setItem('order', JSON.stringify(productArr));
  console.log(productArr);
	
	updateCartNumber(productArr.length);
}

function updateCartNumber() {
  let productArrString = window.localStorage.getItem('order');
  let productArr = JSON.parse(productArrString);
	var cartCount = document.getElementById('cartCount');
  cartCount.innerHTML = productArr.length + " Item(s)";

}




/*

JSON takes an object or list of objects
Make them into a string, including all the attributes then pass this string to another page 
Then that reciving page decodes the string and makes it back into an object(s)

*/
//page unload or page navigation event in vanilla javascript
//vanilla javascript alert button events




function goToCheckoutPage() {
	updateCartNumber();
	
  var loadedProductArr = window.localStorage.getItem('order')
  console.log(loadedProductArr)
	var productArr2 = JSON.parse(loadedProductArr)
	
	//At this point, productArr2 is the same as productArr
	
	//load that new HTML page
	//do stuff with productArr
}

//create
//let user ={};
//localStorage.setItem("user",JSON.stringify(user));

//retrieve
//let user =JSON.parse(localStorage.getItem("user"));