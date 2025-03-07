function toggleMode() {
    const html = document.documentElement 

   if(html.classList.contains('claro')) {
     html.classList.remove('claro')
   } else {
     html.classList.add('claro')
   }
    const img = document.querySelector("#profile img")

   if(html.classList.contains("claro")) {

    img.setAttribute("src", "./assets/Manhã.png" )
   } 

   else {
    img.setAttribute("src", "./assets/Noite.png")
   }
}
    
    