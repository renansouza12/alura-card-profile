const title = document.querySelector('.title');
const totalCourses = document.querySelector('.courses');
const totalSteps = document.querySelector('.steps');

const url = 'https://www.alura.com.br/api/dashboard/0af72c83fba398987e3f08a721ad23190b10a1f95c9764b6e8b070496a23f3ca';

 fetch(url)
    .then(response => {
      return response.json();
    })  
    .then(data => {
     return data
    })
    .then(results =>{
     getData(results);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });

function getData(results){
  const details = results.guides['0'];
  console.log(details);
  const code = details.code;
  const courses = details.totalCourses;
  const steps = details.totalSteps;


  title.innerHTML = code;
  totalCourses.innerHTML = courses;
  totalSteps.innerHTML = steps;
  
}