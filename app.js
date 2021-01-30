// tangkap element inang
let app = document.querySelector
('.app')

let brandName = 'J O K O'
let textColor = 'white'
let bgColor = 'black'
let imgNumber = 10

let dataCard =['']

const back = function(){
    console.log(imgNumber)
    let hero = document.querySelector('.hero')
    hero.style.backgroundImage = `url(https://picsum.photos/seed/${imgNumber -= 1}/600)`
}
const fwd = function(){
    console.log(imgNumber)
    let hero = document.querySelector('.hero')
    hero.style.backgroundImage = `url(https://picsum.photos/seed/${imgNumber += 1}/600)`
}

// BUAT COMPONENT NAVBAR
const navbar = `  
    <nav class='navbar' style="background-color : ${bgColor};">
        <h1 class='brand' style="color : ${textColor};
            font-size : 2rem;
        ">
             ${brandName}
        </h1>
    </nav>
`
// BUAT COMPONENT HEADER
const header = `

    <header class="hero" style="
    background-image : url(https://picsum.photos/seed/${imgNumber}/600);
    background-size : cover;
    background-position : center;
    width : 100vw;
    height : 80vh;
    display : flex;
    align-items : center;
    padding : 0 10%;
    ">

    <span class="material-icons al"

        onclick="back()"

    >navigate_before</span>
    <span class="material-icons ar"

        onclick="fwd()"

    >navigate_next</span>

    </header>

`

// BUAT COMPONENT FOOTER
const footer = `
    <footer style="
        width : 100vw;
        height : 10vh;
        display : flex;
        justify-content : center;
        align-item : center;
        color : white;
        background-color : black;
    ">
        <h3>Copyright PJJ TEAM</h3>
    </footer>

`
// BUAT COMPONENT ABOUT
const about = (title , color)=>{
    title = 'About Page'
    color = 'black'
    No = 13
    // JIKA PAKE url(https://picsum.photos/seed/${No}/900);
    return `
        <section class='About' style="
            width : 100vw;
            height : 100vh;
            display : flex;
            flex-direction : column;
            justify-content : center;
            align-items : center;
            background-image : url(https://picsum.photos/seed/${No}/900);
            background-size : cover;
            color : ${color};

        ">
            <h1>${title}</h1>
            <div class='cardContainer'>
            ${card(50, 'Ini card 1', 'ini isi card 1')}
            ${card(54, 'Ini card 2', 'ini isi card 2')}
            ${card(56, 'Ini card 3', 'ini isi card 3')}
            ${card(12, 'Ini card 4', 'ini isi card 4')}
            ${card(93, 'Ini card 5', 'ini isi card 5')}
            ${card(76, 'Ini card 6', 'ini isi card 6')}
            </div>
            

        </section>
    
    `

}

const card = (img, title, content)=>{
    return `
    <div class='card' >
        <img src='https://picsum.photos/seed/${img}/300' />
        <div class='textContainer'>
            <h3 class='text_title'>${title}</h3>
            <p class='text_content'>${content}</p>
        </div> 
    </div>
`
}

// render string ke element tersebut 
// string yang terdapat syntax HTML
app.innerHTML += `

    ${navbar}
    
    ${header}

    ${about('About Page', 'white', 23)}


    ${footer}

`