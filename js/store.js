const response=fetch('https://mocki.io/v1/c2922e78-d536-4a65-b1cd-4fe99a88ce0b')
  .then(response => response.json())
  .then(response => {
    const stores=[];
    response.forEach(element => {
        stores.push(element);
    });

    const cardscontainer=document.getElementById('cards');
    for(let i=0;i<=1;i++)
    {
        const store = document.createElement('div');
        store.classList.add('store-card');

        const top = document.createElement('div');
        top.classList.add('card-top');

        const img = document.createElement('img');
        img.classList.add('store-img');
  
        const details=document.createElement('div');
        details.classList.add('store-details');

        const name=document.createElement('h6');
        name.classList.add('store-name');

        const status=document.createElement('div');
        status.classList.add('distance-status');

        const distance=document.createElement('p');
        distance.classList.add('distance-p');

        const statusp=document.createElement('p');
        statusp.classList.add('status-p');

        const icons=document.createElement('div');
        icons.classList.add('icons');

        const dine=document.createElement('img');
        dine.classList.add('dine-img');
        dine.src="/images/dine.png";

        const wifi=document.createElement('img');
        wifi.classList.add('wifi-img');
        wifi.src="/images/wifi.png";

        const bottom=document.createElement('div');
        bottom.classList.add('card-bottom');

        const car=document.createElement('img');
        car.classList.add('car-img');
        car.src="/images/car.png";

        const time=document.createElement('p');
        time.classList.add('time-p');

        const direction=document.createElement('a');
        direction.classList.add('direction-btn');
        direction.textContent="Show Direction";
        if(i==0){
          direction.href="https://maps.app.goo.gl/dvFNeg5re2e2X8CC8";
        }
        else{
          direction.href="https://maps.app.goo.gl/bAH7tZFoocPNtS7e7";
        }
        


        name.textContent=`${stores[i].name}`;
        distance.textContent=`${stores[i].distance} kms away`;
        statusp.textContent=`${stores[i].status}`;
        time.textContent=`${stores[i].time} mins`;
        img.src=`${stores[i].image}`;
    
        // button.textContent="Apply Now";
        // fee.textContent="Fee starting at ₹799 per subject";

        top.appendChild(img);
        status.appendChild(distance);
        status.appendChild(statusp);
        icons.appendChild(dine);
        icons.appendChild(wifi);
        details.appendChild(name);
        details.appendChild(status);
        details.appendChild(icons);
        top.appendChild(details);
        bottom.appendChild(car);
        bottom.appendChild(time);
        bottom.appendChild(direction);
        store.appendChild(top);
        store.appendChild(bottom);


        cardscontainer.appendChild(store);
       
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

