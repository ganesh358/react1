let main1 = async (url) => {
    let res = await fetch(url);


    let data = await res.json();
    
    let data1 = data.meals;
          return data1


};


let append = (data1,container) =>{

     container.innerHTML = null;
     data1.forEach((el) =>{
         let div= document.createElement("div");
         div.style.marginLeft = "20rem"
         
      
         let dish = document.createElement("h3");
         dish.innerText = el.strMeal;

         let img = document.createElement("img");
         img.src = el.strMealThumb;

         let disc = document.createElement("p");
         disc.innerText = el.strInstructions

        // console.log(dish)

         div.append(img,dish,disc);

         container.append(div);
     })
 }

export { main1, append };