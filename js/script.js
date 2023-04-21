// DECLARO LAS CONSTANTES
const table = document.querySelector("#table-content");
const input = document.querySelector("#input");
const alertContainer = document.querySelector("#alert-container");
let totalList = "";

//HAGO EL FETCH, LE INCLUYO FUNCION PARA ARMAR LA LISTA Y GUARDO EL VALOR DE LA LISTA EN UN "LET"
const url = "https://gist.githubusercontent.com/SuecoMarcus/a77af69f0e84c3125a5c0cf43a3ac41b/raw/918cd058b7e2286a36e79643c63a5ebca097d7c8/users.json";
fetch (url)
.then ((data) => data.json())
.then ((persons) => {
    totalList = persons;
    for (people of persons){
        console.log(people)
        table.insertAdjacentHTML("beforeend",`
        <tr>
          <td>${people.id}</td>
          <td>${people.firstname}</td>
          <td>${people.lastname}</td>
          <td>${people.age}</td>
        </tr>
        `)
    }
})

/*CAPTURO EL EVENTO DE "KEYUP" DEL INPUT Y ARMO UN FILTRO CON LOS "INCLUDES" DE LOS NOMBRES.
RECORRO EL ARRAY Y EL OBJECT. ARMO 2 FILTROS, UNO PARA LA ALERTA Y OTRO PARA NO REPETIR ELEMENTOS.*/
input.addEventListener("keyup", (data) => {
    let inputValue = input.value.toLowerCase();
    let counter = 0;
    let topping = 0;
    table.innerHTML="";
    alertContainer.innerHTML = '';
    for (people of totalList){
        topping = 0;
        for(item in people){
            const compare = people[item].toString().toLowerCase();
            if (compare.includes(inputValue) && topping === 0){
                table.insertAdjacentHTML("beforeend",`
                <tr>
                <td>${people.id}</td>
                <td>${people.firstname}</td>
                <td>${people.lastname}</td>
                <td>${people.age}</td>
                </tr>
                `)
                topping += 1;
                counter += 1;
            }
        }
    }
    if (counter === 0){
        alertContainer.innerHTML = '';
        alertContainer.insertAdjacentHTML("beforeend",`
        <p>El usuario buscado no se encuentra registrado</p>
        `)
    }
})