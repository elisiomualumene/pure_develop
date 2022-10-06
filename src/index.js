const root = document.querySelector(".root")

const menuIcon = "./src/assets/icons/menu.png"
const headerImg = "./src/assets/header.jpg"

root.innerHTML = 
`
<nav class="menu">
    <h1>Develop | Shop</h1>
    <ul>
        <a href="#"><li>Shop</li></a>
        <a href="#"><li>Produtos</li></a>
        <a href="#"><li>Categorias</li></a>
        <a href="#"><li>Contato</li></a>
    </ul>
    <img src='${menuIcon}' alt="menu" width="30px" id="menuIcon"/>
</nav>

<div class="head">
    <p>A <span>Develop</span> é uma marca de roupa angolana, que tem por objetivo proporcionar a melhor qualidade para os seus clientes.</p>
    <img src='${headerImg}' alt="header image" id="headerImg"/>
</div>

<div class="category">
    
</div>
`

