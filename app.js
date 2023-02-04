const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// import all the fields from the form.
// eg.
// const name = document.getElementById("name");
const Name = document.getElementById("Name");
const Email = document.getElementById("Email");
const Phone = document.getElementById("Phone");
const Github = document.getElementById("Github");
const Linkedin = document.getElementById("Linkedin");
const Degree = document.getElementById("Degree");
const College = document.getElementById("College");
const StartingYear = document.getElementById("StartingYear");
const PassingYear = document.getElementById("PassingYear");
const CGPA = document.getElementById("CGPA");
const Skills = document.getElementById("Skills");
const Project = document.getElementById("Project");
const pDescription= document.getElementById("pDescription");
const Link = document.getElementById("Link");
const Company = document.getElementById("Company");
const Designation= document.getElementById("Designation");
const Duration = document.getElementById("Duration");
const eDescription = document.getElementById("eDescription");


function handleSubmit(e) {
  e.preventDefault();
  //   here get the values from the form and set it to the resume
  // eg.
  //   const name_resume = document.getElementById("name_resume");
  //   name_resume.innerHTML = name.value;
  //   similarly for all the other fields
  const Name_resume = document.getElementById("Name_resume");
  Name_resume.innerHTML = Name.value;

  const Email_resume = document.getElementById("Email_resume");
  Email_resume.innerHTML = Email.value +" | ";

  const  Phone_resume = document.getElementById("Phone_resume");
  Phone_resume.innerHTML =  Phone.value + " | ";

  const   Github_resume = document.getElementById("Github_resume");
  Github_resume.innerHTML =   Github.value + " | ";

  const Linkedin_resume = document.getElementById("Linkedin_resume");
  Linkedin_resume.innerHTML = Linkedin.value;

  const Degree_resume = document.getElementById("Degree_resume");
  Degree_resume.innerHTML =  Degree.value;

  const College_resume = document.getElementById("College_resume");
  College_resume.innerHTML = College.value;

  const StartingYear_resume = document.getElementById("StartingYear_resume");
  StartingYear_resume.innerHTML = StartingYear.value;

  const PassingYear_resume = document.getElementById("PassingYear_resume");
  PassingYear_resume.innerHTML = " -" +PassingYear.value;

  const CGPA_resume = document.getElementById("CGPA_resume");
  CGPA_resume.innerHTML = "CGPA:" +CGPA.value;

  const skills_resume = document.getElementById("skills_resume");
  skills_resume.innerHTML = Skills.value;

  const Project_resume = document.getElementById("Project_resume");
  Project_resume.innerHTML = Project.value;

  const pDescription_resume = document.getElementById("pDescription_resume");
  pDescription_resume.innerHTML = pDescription.value;

  const Link_resume = document.getElementById("Link_resume");
  Link_resume.innerHTML = Link.value;

  const Company_resume = document.getElementById("Company_resume");
  Company_resume.innerHTML =  Company.value;

  const Designation_resume = document.getElementById("Designation_resume");
  Designation_resume.innerHTML = Designation.value;

  const Duration_resume = document.getElementById("Duration_resume");
  Duration_resume.innerHTML =  Duration.value;

  const eDescription_resume = document.getElementById("eDescription_resume");
  eDescription_resume.innerHTML = eDescription.value;


}

function handleLeft() {
  const left = document.querySelector(".left");
  left.style.display="none";
  const right = document.querySelector(".right");
  right.style.width="1000px";
  const print = document.querySelector(".print");
  print.style.display="block";
  // write more codes here

}
function handlePrint() {
  const right = document.querySelector(".right");
  right.style.width="70%";
  const left = document.querySelector(".left");
  left.style.display="block";
  const print = document.querySelector(".print");
  print.style.display="none";
  // write more codes here
}



