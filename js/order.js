const request = fetch('https://api.msigma.in/btech/v2/branches/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const branches = [];
        data.branches.forEach(element => {
            branches.push(element)
        });
const container = document.getElementById("div");
for(let i=0;i<=20;i++){

    // const colors = ["red", "blue", "orange", "green", "yellow"];
    // const random = colors[Math.floor(Math.random() * colors.length)];
    
const container1 = document.createElement("div");
container1.classList.add("card");
const im = document.createElement("img");
const im2 = document.createElement("img");
const h = document.createElement("h4");
const p = document.createElement("p");
p.classList.add("p1");
const pi = document.createElement("p");
pi.classList.add("p2");
h.textContent=`${branches[i].short}`;
p.textContent=`${branches[i].name}`;
a.textContent="ApplyNow";
a.classList.add("button");
pi.textContent="Fee starting at ₹799 per subject";
container1.appendChild(h);
container1.appendChild(p);
container1.appendChild(a);
container1.appendChild(pi);
if(i%2==0){
    container2.appendChild(container);
}else{
    container1.appendChild(container);
}}
})
// .catch(error => {
// console.error(error);
// });
