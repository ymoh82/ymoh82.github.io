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
		this.quantity = 1
	}
}

function addToCart() {
  var size = document.getElementById('p-size').innerText.split(':')[0].replace(/[a-z]/g, '').replace('-', '');
  //size is an array of the four inputs from HTML page

  
	var color = document.getElementById("p-color").innerText.replace(':', '').toLowerCase().replace(/\s/g, '');
  //color is an array of the three inputs from our HTML page

  if (!color || !size) return;
  
	
  var item = new Product(size, color);
  
  cart.add(item);

  alert("Item added!");
	
	updateCartNumber();
}

function updateCartNumber() {
  cartCount.innerHTML = cart.read().length + " Item(s)";
}

function handleClickRemove(index) {
  const item = cart.read()[index];

  if (item.quantity === 1) {
    return cart.remove(index);
  }

  const count = +prompt(`There are ${item.quantity} items. How many do you want to delete?`).trim();
  cart.decrease(index, count);
}

function updateCartList() {
  const backgroundImageMap = {
    brown: 'brownmain.png',
    darkblue: 'bluemain.png',
    blue: 'item3.jpg',
  };

  const cartList = document.getElementById('cart-list');

  if (!cartList) return;

  cartList.innerHTML = `
  <tr class="category" id="cart-category">
    <th class="th_des">Description</th>
    <th class="th_siz">Size</th>
    <th class="th_col">Color</th>
    <th class="th_qua">Quantity</th>
    <th class="th_rem"> Remove</th>
    <th class="th_pri">Price</th>
  </tr>
  ` + cart.read().map((item, index) => `
    <tr class="first_row">
      <td class="description">
        <div class="item" style="background-image: url(muddypaw_img/${backgroundImageMap[item.color]})"></div>
        <p>Harness, <br> Dog</p>
      </td>
      <td class="sizebox">
        <div class="size_box">${item.size}</div>
      </td>
      <td class="colorbox">
        <div class="color_box">
          <div class="colorcirc" style="background-color:${item.color}"></div>
        </div>
      </td>
      <td class="quantity">
        <div class="decrease" onclick="cart.decrease(${index});updateCartList()">-</div>
        <div class="counter">${item.quantity}</div>
        <div class="increase" onclick="cart.increase(${index});updateCartList()">+</div>
      </td>
      <td class="remove">
        <div class="remove_box" onclick="handleClickRemove(${index});updateCartList()">X</div>
      </td>
      <td class="price">
        <span>$${(20 * item.quantity).toFixed(2)}</span>
      </td>
    </tr>
  `).join(' ');

  let totalPrice = 0;

  cart.read().forEach(item => {
    totalPrice += item.quantity * 20;
  });

  document.querySelector('.total span').innerHTML = `$${totalPrice.toFixed(2)}`
}

window.addEventListener("load", () => {
  updateCartNumber();
  updateCartList();
})


/*

JSON takes an object or list of objects
Make them into a string, including all the attributes then pass this string to another page 
Then that reciving page decodes the string and makes it back into an object(s)

*/
//page unload or page navigation event in vanilla javascript
//vanilla javascript alert button events




function goToCheckoutPage() {
	updateCartNumber();
	
	//At this point, productArr2 is the same as productArr
	
	//load that new HTML page
	//do stuff with productArr
}

//create
//let user ={};
//localStorage.setItem("user",JSON.stringify(user));

//retrieve
//let user =JSON.parse(localStorage.getItem("user"));