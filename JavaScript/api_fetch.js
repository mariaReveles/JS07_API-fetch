/* 
function getCharacters(done){

    const results = fetch ("https://reqres.in/api/users?delay=3");

    results
    .then(response => response.json())
    .then (data => {
        done(data)
    });

}

getCharacters(data =>{
   data.results.array.forEach(personaje => {
    const article = document.createRange().createContextualFragment(
        `
        <article>
            <div>
                <img class="rounded-circle" src="${personaje}" alt="personaje">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
        `
    );

    const main = document.querySelector("main");
    mainappend(article);
    
   });

}); */

/**++++++++++++++++++++++++++++++++ */

        const contenido = document.querySelector('#contenido')

const URL = 'https://reqres.in/api/users?delay=3';

        function traer(){
            fetch(URL)
            .then (res => res.json())
            .then( datos => {
                tabla(datos)
                 //console.log(datos)
            })

            function tabla(datos){
                //console.log(datos)
                contenido.innerHTML =  ''
                for(let valor of datos){
                    //console.log(valor.nombre)
                    contenido.innerHTML += `
                    <tr>
                    <th scope="row">${valor.id}</th>
                    <td>${valor.email}</td>
                    <td>${valor.first_name}</td>
                    <td>${valor.last_name}</td>
                    <td>${valor.avatar}</td>
                  </tr>
                    `
                }
            }



        }
    
/**++++++++++++++++++++++++++++++++ */

