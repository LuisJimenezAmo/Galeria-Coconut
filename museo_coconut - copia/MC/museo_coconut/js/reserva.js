function onLoad(){
    handleForm();
    function handleForm(){
        const form = document.getElementById('form');
        form.addEventListener('submit', (e) => {            
            e.preventDefault();
            let name = e.target.name.value 
            let surname = e.target.surname.value
            let email = e.target.email.value
            let tel = e.target.tel.value || ""
            let date = e.target.date.value
            
            const card = document.getElementById("reservaCard")
            let titulo = document.createElement("h3");
            titulo.classList.add("titleCard")
            titulo.innerHTML = `Hola ${name} ${surname}, tu reserva ha sido registrada con éxito  para el:\n\n${new Date(date).getDate()}/${new Date(date).getMonth()+1}/${new Date(date).getFullYear()}`
            card.appendChild(titulo)
           
            
           
            card.style.display = "block"
           
            console.log(name, surname, email, tel, date);
        });
      
    }
}