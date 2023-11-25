async function fetchData() {
    try {
      const response = await fetch("https://mocki.io/v1/73d694d0-bd11-4e29-8916-d124897d1721");
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      const products = [];
      data.forEach((element) => {
        products.push(element);
        console.log(products);
      });


      const maincontainer = document.getElementById("outer_container");
      maincontainer.classList.add("main");

    //   const container = document.getElementById("frap-div");
    for (let i = 0; i < 6; i++) {
                const frapContainer = document.createElement("div");
                frapContainer.classList.add("frap");
                const container1 = document.createElement("div");
                container1.classList.add("frap1");
                const image1 = document.createElement("img");
                image1.src = products[i].thumbnail;
                container1.appendChild(image1);

                const container2 = document.createElement("div");
                container2.classList.add("frap2");
                const h4 = document.createElement("h4");
                h4.textContent = products[i].title;
                container2.appendChild(h4);

                const container3 = document.createElement("div");
                container3.classList.add("tall");
                const p3 = document.createElement("p");
                p3.textContent = products[i].category;
                const p4 = document.createElement("p");
                p4.textContent = products[i].description;
                container3.appendChild(p3);
                container3.appendChild(p4);

                const container4 = document.createElement("div");
                container4.classList.add("money");
                const p5 = document.createElement("h3");
                p5.textContent = `₹ ${products[i].price}`;
                const button1 = document.createElement("button");
                button1.classList.add("button1");
                button1.textContent = "Add Item";

                button1.addEventListener("click", function() {
                  window.location.href = "additem.html";
              });

                container4.appendChild(p5);
                container4.appendChild(button1);
                container2.appendChild(container3);
                container2.appendChild(container4);
                frapContainer.appendChild(container1);
                frapContainer.appendChild(container2);
                maincontainer.appendChild(frapContainer);
            }


    } catch (error) {
      console.error("error:", error);
    }
  }
  fetchData();

  function goStorePage() {
    window.location.href = "store.html";
  }