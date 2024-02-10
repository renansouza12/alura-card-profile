const title = document.querySelector('.title');
const totalCourses = document.querySelector('.courses');
const totalSteps = document.querySelector('.steps');

const url = 'https://www.alura.com.br/api/dashboard/0af72c83fba398987e3f08a721ad23190b10a1f95c9764b6e8b070496a23f3ca';

async function getUser(){
  const response = await fetch(url);
  const data = await response.json();
  const results = data.guides['0'];
  return results;
}


async function getData(){
  const data = await getUser();
  const { code, totalCourses, totalSteps } = data;
  displayInformations(code, totalCourses, totalSteps)
}

getData();

function displayInformations (code, courses, steps){
  title.innerHTML = code;
  totalCourses.innerHTML = courses;
  totalSteps.innerHTML = steps;

}
