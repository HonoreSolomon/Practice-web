const form = document.querySelector('#searchForm')
const imgContainer = document.querySelector('#imgContainer')
const clear = document.querySelector('#clear')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userSearch = form.elements.query.value

    const config = {params: {q: userSearch}}
    console.log(config.params.q);
    const res = await axios.get( `https://api.tvmaze.com/search/shows`, config)
    
    makeImgs(res.data)
    // const imgSrc = res.data[0].show.image.medium
    form.elements.query.value = ''


})
clear.addEventListener('click', () => {
    deleteImgs()
})
const makeImgs = (shows) => {
    for (const tvShow of shows){
        if(tvShow.show.image){
            const imgSrc = tvShow.show.image.medium
        
            const img = document.createElement('img');
            img.src = imgSrc
            img.id = ('showImg')
            imgContainer.appendChild(img)
        }
    }

}
const deleteImgs = () => {
    const imgs = [...document.querySelectorAll('#showImg')]
    for (const img of imgs ) {
        img.remove
    }
    
    

}
