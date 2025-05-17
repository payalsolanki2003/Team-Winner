let arr = [
{
  name : "Payal",
  Primary: "rgb(72, 17, 2)",
  Secondary: "rgb(220, 56, 81)"
},

{ 
    name : "Ananta",
    Primary: "rgb(139,139,165)",
    Secondary: "rgb(185,69,87)"
},

{
    name :"Parul",
    Primary: "rgb(205,115,87)",
    Secondary: "rgb(105,12,87)"
},

{ 
    name : "Puchhi",
    Primary:"rgb(255,19,94)",
    Secondary: "rgb(195,60,97)"
},

{
    name : "Pooja",
    Primary: "rgb(255,89,44)",
    Secondary: "rgb(105,69,87)"
}
];

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function(){
    let num = Math.floor(Math.random()*arr.length);
    let winner = arr[num];
    
    h1.innerHTML = winner.name;
    h1.style.color = winner.Primary;
    h1.style.backgroundColor = winner.Secondary;
});
