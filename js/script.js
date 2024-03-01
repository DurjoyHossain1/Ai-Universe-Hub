const featuresContainer = document.getElementById('features-container');

const myFetch = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const json = await res.json();
    const data = json.data.tools;
    myData(data)
}

 const myData = (data) => {
    
  // if the value is gatter then 6 then show the Show All Buttons
  const showAllButton = document.getElementById('showAll-Container');
  if (data.length >= 6) {
    showAllButton.classList.remove('hidden')
  }else{
    showAllButton.classList.add('hidden')
  }

  //Show Screen in the value only 6
  data = data.slice(0,6)

    data.forEach((card) => {
      console.log(card);
      const featuresCard = document.createElement('div');
      featuresCard.classList = 'card md:w-96 bg-base-100 shadow-xl p-5'
      featuresCard.innerHTML = 
      
      `
      <figure>
      <img src="${card?.image}" alt="Con't Found ${card.name}" />
      </figure>
      <div class="mt-6">
        <h2 class="card-title mb-4 text-2xl">Features</h2>
       <ol>
          <li><span class="font-semibold">1.</span> Natural Language Procacing</li>
          <li><span class="font-semibold">2.</span> Contextual understanding</li>
          <li><span class="font-semibold">3.</span> Text generation</li>
       </ol>
        <hr class="my-2">

        <div class="flex items-center justify-between">
          <div>
              <h2 class="text-2xl font-semibold mb-3 mt-3">${card.name}</h2>
              <h3 class="flex gap-2"><span><img src="images/Frame.png" alt=""></span> ${card.published_in}</h3>
          </div>
          <span class="btn rounded-full bg-[#FEF7F7] p-3"> <img src="images/Arrow.png" alt=""> </span>
        </div>
      </div>
      `

      featuresContainer.appendChild(featuresCard);

    })
 }

myFetch()