
   
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        selectRandomTag();

    }
    
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}


function selectRandomTag(){
    const tag = selectTag();

    const interval = setInterval(() => {

        highlight(tag);

        setTimeout(()=>{
            unhighlight(tag);

        },100)
        


    }, 100)


    setTimeout(()=>{
        clearInterval(interval);

        setTimeout(()=>{
            const randomTag = selectTag();
            highlight(randomTag);

        },100)


    }, 5000)




}

function selectTag(){

    const tags = document.querySelectorAll('.tag')
    const tag = tags[Math.floor(Math.random()* tags.length)]
    return tag;
}

function highlight(tag){
    tag.classList.add('highlight');
}

function unhighlight(tag){
    tag.classList.remove('highlight')
}