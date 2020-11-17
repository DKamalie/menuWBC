// COFFEE HOT BEVERAGES
function hBevCalcFunc() {
  let p = document.getElementById('hBevTotal');
  if (document.getElementById('coffeeSelect').value === "cappuccino") {
    p.innerHTML =  parseInt(15);
  } else if (document.getElementById('coffeeSelect').value === "americano") {
    p.innerHTML =  18;
  }
  else if (document.getElementById('coffeeSelect').value === "espresso") {
    p.innerHTML =  19;
  }
  else if (document.getElementById('coffeeSelect').value === "macchiatto") {
    p.innerHTML =  23;
  }
  else if (document.getElementById('coffeeSelect').value === "mocha") {
    p.innerHTML =  25;
  }
  else if (document.getElementById('coffeeSelect').value === "latte") {
    p.innerHTML =  27;
  } else if (document.getElementById('coffeeSelect').value === "none"){
    p.innerHTML = 0 ;
  }
}
function hBevCupFunc () {
  let p = document.getElementById('hBevTotal');
  if (document.getElementById('coffeeSizes').value === "small" && document.getElementById('coffeeSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(1);
  }
  else if(document.getElementById('coffeeSizes').value === "medium" && document.getElementById('coffeeSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(2);
  }
  else if(document.getElementById('coffeeSizes').value === "large" && document.getElementById('coffeeSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(3);
  }
  else if(document.getElementById('coffeeSizes').value === "extraLarge" && document.getElementById('coffeeSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(5);
  }
}

function coffeeCheckBoxOne() {
  let p = document.getElementById('hBevTotal');
  if (document.getElementById('checkCream').checked) {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(2);
    }
}
function coffeeCheckBoxTwo() {
  let p = document.getElementById('hBevTotal');
  if (document.getElementById('checkMilk').checked) {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(3);
  }
}
function coffeeCheckBoxThree() {
  let p = document.getElementById('hBevTotal');
  if (document.getElementById('checkBiscuit').checked) {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(4);
  }
}

//  TEA HOT BEVERAGES
function teaBevCalcFunc() {
  let p = document.getElementById('teaBevTotal');
  if (document.getElementById('teaSelect').value === "red") {
    p.innerHTML =  14;
  } else if (document.getElementById('teaSelect').value === "fiveRoses") {
    p.innerHTML =  13;
  }
  else if (document.getElementById('teaSelect').value === "rooibos") {
    p.innerHTML =  14;
  }
  else if (document.getElementById('teaSelect').value === "greenTea") {
    p.innerHTML =  15;
  }
  else if (document.getElementById('teaSelect').value === "none") {
    p.innerHTML = 0 ;
  }
}
function teaBevCupFunc () {
  let p = document.getElementById('teaBevTotal');
  if (document.getElementById('teaSizes').value === "small" && document.getElementById('teaSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(1);
  }
  else if(document.getElementById('teaSizes').value === "medium" && document.getElementById('teaSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(2);
  }
  else if(document.getElementById('teaSizes').value === "large" && document.getElementById('teaSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(3);
  }
  else if(document.getElementById('teaSizes').value === "extraLarge" && document.getElementById('teaSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(5);
  }

}

function teaCheckBoxOne() {
  let p = document.getElementById('teaBevTotal');
  if (document.getElementById('checkCreamy').checked) {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(2);
    }
}
function teaCheckBoxTwo() {
  let p = document.getElementById('teaBevTotal');
  if (document.getElementById('checkMilky').checked) {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(3);
  }
}
function teaCheckBoxThree() {
  let p = document.getElementById('teaBevTotal');
  if (document.getElementById('checkBiscuity').checked) {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(4);
  }
}

// COLD BEVERAGES
function coldBevCalcFunc() {
  let p = document.getElementById('coldBevTotal');
  if (document.getElementById('coldSelect').value === "water") {
    p.innerHTML =  14;
  } else if (document.getElementById('coldSelect').value === "tizer") {
    p.innerHTML =  18;
  }
  else if (document.getElementById('coldSelect').value === "icedTea") {
    p.innerHTML =  14;
  }
  else if (document.getElementById('coldSelect').value === "juice") {
    p.innerHTML =  15;
  }
  else if (document.getElementById('coldSelect').value === "smoothies") {
    p.innerHTML =  21;
  }
  else if (document.getElementById('coldSelect').value === "milkshakes") {
    p.innerHTML =  21;
  }
  else if (document.getElementById('coldSelect').value === "milo") {
    p.innerHTML =  15;
  }
  else if (document.getElementById('coldSelect').value === "none") {
    p.innerHTML = 0 ;
  }
}
function coldBevCupFunc () {
  let p = document.getElementById('coldBevTotal');
  if (document.getElementById('coldSizes').value === "small" && document.getElementById('coldSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(1);
  }
  else if(document.getElementById('coldSizes').value === "medium" && document.getElementById('coldSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(2);
  }
  else if(document.getElementById('coldSizes').value === "large" && document.getElementById('coldSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(3);
  }
  else if(document.getElementById('coldSizes').value === "extraLarge" && document.getElementById('coldSelect').value !== "none") {
    p.innerHTML = parseInt(p.innerHTML) + parseInt(5);
  }

}


// DESSERTS
function desBevCalcFunc() {
  let p = document.getElementById('desBevTotal');
  if (document.getElementById('desSelect').value === "waffles") {
    p.innerHTML =  14;
  } else if (document.getElementById('desSelect').value === "pancakes") {
    p.innerHTML =  18;
  }
  else if (document.getElementById('desSelect').value === "brownis") {
    p.innerHTML =  14;
  }
  else if (document.getElementById('desSelect').value === "scones") {
    p.innerHTML =  15;
  }
  else if (document.getElementById('desSelect').value === "croissant") {
    p.innerHTML =  21;
  }
  else if (document.getElementById('desSelect').value === "biscuits") {
    p.innerHTML =  21;
  }
  else if (document.getElementById('desSelect').value === "muffins") {
    p.innerHTML =  15;
  }
  else if(document.getElementById('desSelect').value === "none") {
    p.innerHTML = 0;
  }
}


// COFFEE ANIMATION
var coffee = document.getElementById('coffees');
var sugar = document.getElementById('sugars');
var milk = document.getElementById('milks');
var mug = document.getElementById('all');
var cup = document.getElementById('cup');
var frame = document.getElementById('frame1');
var skull = document.getElementById('skull');


// COFFEE
coffee.addEventListener("mouseover", coffeeHoverFunc);

function coffeeHoverFunc() {
  frame1.style.transform = "translate(480px)";
  frame1.style.transition = "1s";
  cup.style.stroke = "brown";
  mug.style.fill = "#e05f14";
  skull.style.top ="4%";
  skull.style.left ="30%";
  skull.transition ="2s";
}

//SUGAR
sugar.addEventListener("mouseover", sugarHoverFunc);

function sugarHoverFunc() {
  frame1.style.transform = "translate(870px)";
  frame1.style.transition = "1s";
  cup.style.stroke = "yellow";
  mug.style.fill = "#d38a56";
}

//MILK
milk.addEventListener("mouseover", milkHoverFunc);

function milkHoverFunc() {
  frame1.style.transform = "translate(1220px)";
  frame1.style.transition = "1s";
  cup.style.stroke = "white";
  mug.style.fill = "#efbd7c";

}

function total() {
  var a = parseFloat(document.getElementById('compTotal').innerHTML = parseInt(document.getElementById('desBevTotal').innerHTML)
  + parseInt(document.getElementById('coldBevTotal').innerHTML)
  + parseInt(document.getElementById('teaBevTotal').innerHTML)
  + parseInt(document.getElementById('hBevTotal').innerHTML));

  document.getElementById('compTotal').style.background = "black";
  document.getElementById('compTotal').style.color = "white";
  // document.getElementById('compTotal').style.paddingRight = '4rem';
  // document.getElementById('compTotal').style.paddingLeft = '5rem';
  // document.getElementById('compTotal').style.paddingTop = '.5rem';
  // document.getElementById('compTotal').style.paddingBottom = '.5rem';
  document.getElementById('compTotal').style.padding = '2.35rem';
  localStorage.pay = document.getElementById('compTotal').innerHTML;


}

function purchaseFunc() {
  if (localStorage.name === "") {
    alert('PLEASE REGISTER')
  } else {
    document.getElementById('purch').href = "file:///C:/Coffee-shop/pay.html";
  }
}
purchaseFunc();
