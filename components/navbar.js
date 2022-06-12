let navbar = () =>{
    return `
         <a id="home" href="index.html">
          Home
        </a>

        <input oninput="main()" type="text" id="query" placeholder="Search food">
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
        <div id="signLog">
            <a href="receipe.html">Receipe of the day</a>
            <a href="random.html">Receipes</a>
            <a href="signUp.html">SignUp</a>
            <a href="login.html">Login</a>
            
        </div>

    `
}

export default navbar ;
