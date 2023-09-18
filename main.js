console.log("hello world")

const URL="https://restcountries.com/v3.1/all"


async function fetchData(){
    const response=await fetch(URL)
    const data=await response.json()
    console.log(data,"data")
    const image1=document.getElementById("image1")
    const image2=document.getElementById("image2")
    const image3=document.getElementById("image3")
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
        }
        return array;
    }
    const randomFlags = shuffleArray([...data]).slice(0, 3);

    console.log(randomFlags);


    image1.src=randomFlags[0].flags.png
    image2.src=randomFlags[1].flags.png
    image3.src=randomFlags[2].flags.png
   // name.innerHTML=pais.altSpellings[1]
  //  capital.innerHTML=pais.capital[0]
}

fetchData()


const myButton = document.querySelector("button");
//myButton.onclick = fetchData;

myButton.addEventListener("click", () => {
    
    return fetchData(URL);
  });

