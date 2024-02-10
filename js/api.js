const title = document.querySelector('.title');
const courses = document.querySelector('.courses');
const steps = document.querySelector('.steps');

const url = 'https://www.alura.com.br/api/dashboard/0af72c83fba398987e3f08a721ad23190b10a1f95c9764b6e8b070496a23f3ca';

async function getUser(){
  const response = await fetch(url);
  const data = await response.json();
  const results = data.guides['0'];
  return results;
}


async function getData(){
  const data = await getUser();
  displayInformations(data);
}

getData();

function displayInformations (data){
  const {code, totalCourses,totalSteps} = data;

  title.innerHTML = code;
  courses.innerHTML = totalCourses;
  steps.innerHTML = totalSteps;

}
