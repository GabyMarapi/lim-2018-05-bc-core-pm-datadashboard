const resultCohortElement = document.getElementById('resultado');
const buttonElement = document.getElementById('boton');


const data = (idCohort) => {
    const dataCohortUrl = 'https://api.laboratoria.la/cohorts/';
    const dataUserUrl = 'https://api.laboratoria.la/cohorts/' + idCohort + '/users';
    const dataProgressUrl = 'https://api.laboratoria.la/cohorts/' + idCohort + '/progress';

    fetch(dataCohortUrl).then(response => {
        const responseCohort = response.json()
        fetch(dataUserUrl).then(response => {
            const responseUser = response.json()
            fetch(dataProgressUrl).then(response => {
                const responseProgress = response.json()

                Promise.all([responseCohort, responseUser, responseProgress])
                    .then(value => {

                        const responseCohortValue = value[0];
                        const responseUserValue = value[1];
                        const responseProgressValue = value[2];

                        const cohortSelected = responseCohortValue.filter(value => {
                            return value.id == idCohort
                        })
                        const dataCohortSelected = cohortSelected[0];

                        const courses = Object.keys(dataCohortSelected.coursesIndex);

                        console.log(courses)

                        const option = {
                            cohort: cohortSelected[0],
                            cohortData: {
                                users: responseUserValue,
                                progress: responseProgressValue
                            },
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
                        





                    })

            })
        })
    })
};





const dataCohort = () => {
    fetch('https://api.laboratoria.la/cohorts/')
        .then(response => {
            return response.json();
        })
        .then(json => {

            const cohortJson = json;

            for (let i = 0; i < cohortJson.length; i++) {

                const cohortContent = document.createElement('div');
                const paragraphContent = document.createElement('div');
                const buttonContent = document.createElement('div');
                const paragraph = document.createElement('p');
                const button = document.createElement('button');
                const paragraphText = document.createTextNode(cohortJson[i].id);
                const buttonText = document.createTextNode('Ingresar')

                paragraph.appendChild(paragraphText);
                paragraphContent.appendChild(paragraph);
                cohortContent.appendChild(paragraphContent);

                button.appendChild(buttonText);
                buttonContent.appendChild(button);
                cohortContent.appendChild(buttonContent);

                resultCohortElement.appendChild(cohortContent);
                button.id = cohortJson[i].id;

            }

        })



}






buttonElement.addEventListener('click', () => { dataCohort(); });

resultCohortElement.addEventListener('click', (event) => {

    if (event.target.nodeName === "BUTTON") {
        console.log(event);
        const idCohort = event.target.id;
        console.log(event.target.id);
        resultCohortElement.style.display = 'none'
        data(idCohort);
    }
});


