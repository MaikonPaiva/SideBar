const sidebar = document.getElementById('sidebar')
const logo = document.getElementById('imglogo')
const search = document.getElementById('search')
const login = document.getElementById('login')
const Dashboad = document.getElementById('Dashboad')
const Pets = document.getElementById('Pets')
const User = document.getElementById('User')
const Vets = document.getElementById('Vets')
const Confuguration = document.getElementById('Confuguration')
const navigation = document.getElementById('navigation')
const nome = document.getElementById('nome')
const office = document.getElementById('office')
const imglogin = document.getElementById('imglogin')
const imgSearch = document.getElementById('imgSearch')
const buttonSearch = document.getElementById('buttonSearch')

let showSidebar = false

function toggleSidebar(){

    showSidebar =!showSidebar ;
    if(showSidebar){
        sidebar.style.width='4.5rem'
        sidebar.style.animationName='showSidebar'
        logo.style.width='0'
        search.style.width= '0'
        search.style.padding ='0'
        search.style.background = 'var(--green)'
        buttonSearch.style.marginRight = '0.5rem'
        imgSearch.style.padding ='0'
        login.style.width= '4.5rem'
        login.style.animationName='showSidebar'
        nome.style.fontSize='0rem'
        office.style.fontSize='0rem'
        imglogin.style.width='0'
        imglogin.style.height='0'
        Dashboad.style.fontSize= '0rem'
        Pets.style.fontSize = '0rem'
        User.style.fontSize = '0rem'
        Vets.style.fontSize = '0rem'
        Confuguration.style.fontSize = '0rem'
        navigation.style.marginRight = '1vw'
    

    }else {sidebar.style.width=''
    sidebar.style.animationName='openSidebar'
    logo.style.width=''
    search.style.width= ''
    search.style.padding =''
    search.style.background = ''
    imgSearch.style.padding =''
    login.style.width= ''
    login.style.animationName='openLogin'
    nome.style.fontSize=''
    office.style.fontSize=''
    imglogin.style.width=''
    imglogin.style.height=''
    Dashboad.style.fontSize= ''
    Pets.style.fontSize = ''
    User.style.fontSize = ''
    Vets.style.fontSize = ''
    Confuguration.style.fontSize = ''
    navigation.style.marginRight = ''
    
    }

}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && !showSidebar)
    {
        toggleSidebar()
    }
});