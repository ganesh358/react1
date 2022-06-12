import navbar from "../components/navbar.js";


import "../styles/style.css";

import axios from 'axios'
let navbar_div = document.getElementById('navbar')

navbar_div.innerHTML = navbar();

import { main1, append} from "../components/.fetchjs";

let url = "https://www.themealdb.com/api/json/v1/1/random.php";

let data = await main1(url)
 let cont = document.getElementById("container1");
append(data,cont)