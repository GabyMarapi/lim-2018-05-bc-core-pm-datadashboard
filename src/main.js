//Declarando variables

const cohortsSelectedElement = document.getElementById('cohortsSelected');
const container = document.getElementById('containerdata')
const containerCohorts = document.getElementById('containerCohorts')
const containerTable = document.getElementById('containerTable')
const btnLima = document.getElementById("buttonLima");
const btnArequipa = document.getElementById("buttonAqp");
const btnChile = document.getElementById("buttonSdc");
const btnSaoPaulo = document.getElementById("buttonSpl");
const btnMexico = document.getElementById("buttonCdm");

<<<<<<< HEAD
const data = (idCohort) => {
    const dataCohortUrl = 'https://api.laboratoria.la/cohorts/';
    const dataUserUrl = 'https://api.laboratoria.la/cohorts/' + idCohort + '/users';
    const dataProgressUrl = 'https://api.laboratoria.la/cohorts/' + idCohort + '/progress';
=======
>>>>>>> 033655e87bd0def55ff2ff867221f190629a55b6

const inputElement = document.getElementById('input');
const bodyElement = document.getElementById('body');
const btnFiler = document.getElementById('filter');


const btnsortAscElement01 = document.getElementsByClassName('sortAsc')[0];
const btnsortAscElement02 = document.getElementsByClassName('sortAsc')[1];
const btnsortAscElement03 = document.getElementsByClassName('sortAsc')[2];
const btnsortAscElement04 = document.getElementsByClassName('sortAsc')[3];
const btnsortAscElement05 = document.getElementsByClassName('sortAsc')[4];

const btnsortDescElement01 = document.getElementsByClassName('sortDesc')[0];
const btnsortDescElement02 = document.getElementsByClassName('sortDesc')[1];
const btnsortDescElement03 = document.getElementsByClassName('sortDesc')[2];
const btnsortDescElement04 = document.getElementsByClassName('sortDesc')[3];
const btnsortDescElement05 = document.getElementsByClassName('sortDesc')[4];

let orderBy = '';
let orderDirection = '';
let search = '';
let idCohort = '';

//Función para mostrar en html los estudiantes ordenado y filtrado

const showProcessedData = (resultProcessedData) => {

    if (resultProcessedData.length === 0) {
        bodyElement.innerHTML = 'No se encontraron coincidencias'
    }
  
    for (objetUser of resultProcessedData) {

        if (objetUser.role === 'student') {

            
            const row = document.createElement('tr');

            const celda1 = document.createElement("td");
            const celda2 = document.createElement("td");
            const celda3 = document.createElement("td");
            const celda4 = document.createElement("td");
            const celda5 = document.createElement("td");

            const textoCelda1 = document.createTextNode(objetUser.name);
            celda1.appendChild(textoCelda1);

            const textoCelda2 = document.createTextNode(objetUser.stats.exercises.percent);
            celda2.appendChild(textoCelda2);

            const textoCelda3 = document.createTextNode(objetUser.stats.reads.percent);
            celda3.appendChild(textoCelda3);

            const textoCelda4 = document.createTextNode(objetUser.stats.quizzes.percent);
            celda4.appendChild(textoCelda4);

            const textoCelda5 = document.createTextNode(objetUser.stats.percent);
            celda5.appendChild(textoCelda5);

            bodyElement.appendChild(celda1);
            bodyElement.appendChild(celda2);
            bodyElement.appendChild(celda3);
            bodyElement.appendChild(celda4);
            bodyElement.appendChild(celda5);
            bodyElement.appendChild(row);

        }
       
    }
};

//Función para procesar los datos, retorna el resultado de la función processCohortData() 

const data = (idCohort, orderBy, orderDirection, search) => {

    fetch('https://api.laboratoria.la/cohorts/').then(responseCohort => {

        fetch('https://api.laboratoria.la/cohorts/' + idCohort + '/users').then(responseUser => {

            fetch('https://api.laboratoria.la/cohorts/' + idCohort + '/progress').then(responseProgress => {

                Promise.all([responseCohort.json(), responseUser.json(), responseProgress.json()])
                    .then(value => {
                        const responseCohortValue = value[0];
                        const responseUserValue = value[1];
                        const responseProgressValue = value[2];

<<<<<<< HEAD
                        const cohortSelected = responseCohortValue.filter(value => {
                            return value.id == idCohort
                        })
                        const dataCohortSelected = cohortSelected[0];

                        const courses = Object.keys(dataCohortSelected.coursesIndex);

                        console.log(courses)

                        const option = {
                            cohort: cohortSelected[0],
=======
                        const dataCohortSelected = responseCohortValue.filter(cohort => cohort.id == idCohort)[0];

                        const options = {
                            cohort: dataCohortSelected,
>>>>>>> 033655e87bd0def55ff2ff867221f190629a55b6
                            cohortData: {
                                users: responseUserValue,
                                progress: responseProgressValue
                            },
<<<<<<< HEAD
                            orderBy: 'asc',
                            search: 'desc'
                        }
                        console.log(responseCohortValue);
                        console.log(responseUserValue);
                        console.log(responseProgressValue);

                        computeUserStats = (users, progress, courses) => {
                            const userStudent = user.filter(value => {
                                return value.role == 'student'
                            })

                            userStudent.map()

                        }

                        //computeUserStats(responseUserValue,responseProgressValue,courses)
                        




=======
                            orderBy: orderBy,
                            orderDirection: orderDirection,
                            search: search
                        };
>>>>>>> 033655e87bd0def55ff2ff867221f190629a55b6

                        const resultProcessedData = processCohortData(options);

                        showProcessedData(resultProcessedData)

                    })
            })
        })
    })
};

//Función para mostrar mostrar los cohorts por sede

<<<<<<< HEAD



const dataCohort = () => {
=======
const dataCohort = (place) => {
>>>>>>> 033655e87bd0def55ff2ff867221f190629a55b6
    fetch('https://api.laboratoria.la/cohorts/')
        .then(response => {
            return response.json();
        })
        .then(json => {
            const cohort = json;
            for (select of cohort) {
                const cohortId = select.id.split('-');

                if (cohortId[0] === place) {
                    const cohortContent = document.createElement('div');
                    cohortContent.setAttribute('id','cohorts');
                    const paragraphContent = document.createElement('div');
                    paragraphContent.setAttribute('id','textCohort');
                    const paragraph = document.createElement('p');
                    const buttonContent = document.createElement('div');
                    buttonContent.setAttribute('id','buttonCohort');
                    const paragraphText = document.createTextNode(select.id);
                    const button = document.createElement('button');
                    const buttonText = document.createTextNode('Entrar');

                    
                    button.dataset.cohort = cohortId;
                    paragraph.appendChild(paragraphText);
                    paragraphContent.appendChild(paragraph);
                    cohortContent.appendChild(paragraphContent);
                    button.appendChild(buttonText);
                    buttonContent.appendChild(button);
                    cohortContent.appendChild(buttonContent);
                    cohortsSelectedElement.appendChild(cohortContent);
                    
                    button.id = select.id; 
                }
            }
        })
};

btnLima.addEventListener('click', () => {
    const valueBtnLima = btnLima.value;
    dataCohort(valueBtnLima)
    container.style ='display:none';
    containerTable.style ='display:block';
    document.getElementById('text').style = 'display:none';
})

btnArequipa.addEventListener('click', () => {
    const valueBtnArequipa = btnArequipa.value;
    dataCohort(valueBtnArequipa)
    container.style = 'display:none';
    containerTable.style ='display:block';
    document.getElementById('text').style = 'display:none';
})

btnMexico.addEventListener('click', () => {
    const valueBtnMexico = btnMexico.value;
    dataCohort(valueBtnMexico)
    container.style ='display:none';
    containerTable.style ='display:block';
    document.getElementById('text').style = 'display:none';
})
btnChile.addEventListener('click', () => {
    const valueBtnChile = btnChile.value;
    dataCohort(valueBtnChile)
    container.style ='display:none';
    containerTable.style ='display:block';
    document.getElementById('text').style = 'display:none';
})
btnSaoPaulo.addEventListener('click', () => {
    const valueBtnSaoPaulo = btnSaoPaulo.value;
    dataCohort(valueBtnSaoPaulo)
    container.style ='display:none';
    containerTable.style ='display:block';
    document.getElementById('text').style = 'display:none';
})


 //Evento para mostrar la lista de estudiantes del cohort seleccionado

 cohortsSelectedElement.addEventListener('click', (event) => {

    if (event.target.nodeName === "BUTTON") {

        idCohort = event.target.id;
        containerTable.style.display = 'block';

        orderBy = 'name';
        orderDirection = 'ASC';

        data(idCohort, orderBy, orderDirection, search);
        containerCohorts.style.display = 'none';
    }
});

//Evento para filtrar

btnFiler.addEventListener('click', () => {

    orderBy = 'name';
    orderDirection = 'ASC';
    search = inputElement.value;
    bodyElement.innerHTML = '';

    data(idCohort, orderBy, orderDirection, search);
});

//Eventos para ordenar

btnsortAscElement01.addEventListener('click', () => {

    orderBy = 'name';
    orderDirection = 'ASC';
    bodyElement.innerHTML = '';
    btnsortAscElement01.style.display = 'none';
    btnsortDescElement01.style.display = 'block';

    data(idCohort, orderBy, orderDirection, search);
});
btnsortDescElement01.addEventListener('click', () => {

    orderBy = 'name';
    orderDirection = 'DESC';
    bodyElement.innerHTML = '';

    btnsortDescElement01.style.display = 'none';
    btnsortAscElement01.style.display = 'block';


    data(idCohort, orderBy, orderDirection, search);
});
btnsortAscElement02.addEventListener('click', () => {

    orderBy = 'exercises percent';
    orderDirection = 'DESC';
    bodyElement.innerHTML = '';
    btnsortAscElement02.style.display = 'none';
    btnsortDescElement02.style.display = 'block';



    data(idCohort, orderBy, orderDirection, search);
});
btnsortDescElement02.addEventListener('click', () => {

    orderBy = 'exercises percent';
    orderDirection = 'ASC';
    bodyElement.innerHTML = '';

    btnsortDescElement02.style.display = 'none';
    btnsortAscElement02.style.display = 'block';


    data(idCohort, orderBy, orderDirection, search);
});
btnsortAscElement03.addEventListener('click', () => {

    orderBy = 'reads percent';
    orderDirection = 'DESC';
    bodyElement.innerHTML = '';
    btnsortAscElement03.style.display = 'none';
    btnsortDescElement03.style.display = 'block';



    data(idCohort, orderBy, orderDirection, search);
});
btnsortDescElement03.addEventListener('click', () => {

    orderBy = 'reads percent';
    orderDirection = 'ASC';
    bodyElement.innerHTML = '';

    btnsortDescElement03.style.display = 'none';
    btnsortAscElement03.style.display = 'block';

    data(idCohort, orderBy, orderDirection, search);
});
btnsortAscElement04.addEventListener('click', () => {

    orderBy = 'quizzes percent';
    orderDirection = 'DESC';
    bodyElement.innerHTML = '';
    btnsortAscElement04.style.display = 'none';
    btnsortDescElement04.style.display = 'block';



    data(idCohort, orderBy, orderDirection, search);
});
btnsortDescElement04.addEventListener('click', () => {

    orderBy = 'quizzes percent';
    orderDirection = 'ASC';
    bodyElement.innerHTML = '';

<<<<<<< HEAD




buttonElement.addEventListener('click', () => { dataCohort(); });

resultCohortElement.addEventListener('click', (event) => {

    if (event.target.nodeName === "BUTTON") {
        console.log(event);
        const idCohort = event.target.id;
        console.log(event.target.id);
        resultCohortElement.style.display = 'none'
        data(idCohort);
    }
=======
    btnsortDescElement04.style.display = 'none';
    btnsortAscElement04.style.display = 'block';

    data(idCohort, orderBy, orderDirection, search);
>>>>>>> 033655e87bd0def55ff2ff867221f190629a55b6
});
btnsortAscElement05.addEventListener('click', () => {

    orderBy = 'percent';
    orderDirection = 'DESC';
    bodyElement.innerHTML = '';
    btnsortAscElement05.style.display = 'none';
    btnsortDescElement05.style.display = 'block';



<<<<<<< HEAD
=======
    data(idCohort, orderBy, orderDirection, search);
});
btnsortDescElement05.addEventListener('click', () => {

    orderBy = 'percent';
    orderDirection = 'ASC';
    bodyElement.innerHTML = '';

    btnsortDescElement05.style.display = 'none';
    btnsortAscElement05.style.display = 'block';

    data(idCohort, orderBy, orderDirection, search);
});
>>>>>>> 033655e87bd0def55ff2ff867221f190629a55b6
