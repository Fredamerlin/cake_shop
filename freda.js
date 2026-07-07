// ---------------- CAKE LIST ----------------

let cakes = [
    { pid: 1, pname: "Choco Truffle", price: 250 },
    { pid: 2, pname: "Red velvet", price: 300 },
    { pid: 3, pname: "Butter scotch", price: 350 },
    { pid: 4, pname: "Black Current", price: 400 },
    { pid: 5, pname: "Vennilla", price: 200 },
    { pid: 6, pname: "Strawbery", price: 250 },
    { pid: 7, pname: "Lemon Cheese", price: 450 },
    { pid: 8, pname: "Pistachio", price: 480 },
    { pid: 9, pname: "Cloud Blossom", price: 500 },
    { pid: 10, pname: "Tiramisu", price: 350 }
];

// ---------------- CART ----------------

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ---------------- ADD TO CART ----------------

function addToCart(id)
{
    for(var i=0;i<cakes.length;i++)
    {
        if(cakes[i].pid==id)
        {
            cart.push(cakes[i]);
            break;
        }
    }

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Cake Added Successfully");

    cartCount();
}

// ---------------- DISPLAY CART ----------------

function displayCart()
{
    var data="";
    var total=0;

    cart=JSON.parse(localStorage.getItem("cart")) || [];

    for(var i=0;i<cart.length;i++)
    {
        total=total+cart[i].price;

        data=data+
        "<tr>"+
        "<td>"+cart[i].pid+"</td>"+
        "<td>"+cart[i].pname+"</td>"+
        "<td>₹"+cart[i].price+"</td>"+
        "<td><button onclick='removeFromCart("+cart[i].pid+")'>Remove</button></td>"+
        "</tr>";
    }

    document.getElementById("cartBody").innerHTML=data;
    document.getElementById("total").innerHTML="Total : ₹"+total;

    cartCount();
}

// ---------------- REMOVE ----------------

function removeFromCart(id)
{
    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].pid==id)
        {
            cart.splice(i,1);
            break;
        }
    }

    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();
}

// ---------------- CART COUNT ----------------

function cartCount()
{
    var count=document.getElementById("count");

    if(count!=null)
    {
        count.innerHTML=cart.length;
    }
}

// ---------------- CHECKOUT ----------------

function checkout()
{
    if(cart.length==0)
    {
        alert("Cart is Empty");
        return;
    }

    alert("Order Placed Successfully");

    cart=[];

    localStorage.removeItem("cart");

    cartCount();

    displayCart();
}

// ---------------- PAGE LOAD ----------------

window.onload=function()
{
    cartCount();

    if(document.getElementById("cartBody")!=null)
    {
        displayCart();
    }
}