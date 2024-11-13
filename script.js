const accessKey="8zNg5ldCsWRb4alG1DHj49MtIwP71JQjDpbfXZEjprg"


const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");

let keyword="";
let page=1;


async function searchImages() {
    const keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

   
        const response = await fetch(url);
        const data = await response.json();

        const results = data.results;

        
        if(page===1){
            searchResult.innerHTML="";
        }

        results.forEach(result => {
            if (result.cover_photo && result.cover_photo.urls && result.cover_photo.links) {
                const image = document.createElement("img");
                image.src = result.cover_photo.urls.full;
                const imageLink = document.createElement("a");
                imageLink.href = result.cover_photo.links.html;
                imageLink.target = "_blank";

                imageLink.appendChild(image);
                searchResult.appendChild(imageLink);
            } 
            
            
            
        })
        showMoreBtn.style.display="block";
        
        
    
}


searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})