const nav = document.querySelector('.navbar')
const navBody = document.querySelector('.body')
const toggleBtn = document.querySelector('.nav-btn')
const xBtn = document.querySelector('.x-btn')

toggleBtn.addEventListener('click', () => {
    nav.classList.add('show-nav')
    navBody.classList.add('body-visible')
})
xBtn.addEventListener('click', () => {
    nav.classList.remove('show-nav')
    navBody.classList.remove('body-visible')
})

const teamMembers = [
    {
       memName: "Abhay Aggarwal",
       memPic: "./images/img3.jpeg",
       memSkill: ['C++', 'JavaScript', 'Python', 'CSS', 'Node.js', 'React.js']
    },
    {
        memName: "Abhiraj Singh Chatrath",
        memPic: "./images/img2.jpeg",
        memSkill: ['C++', 'CSS', 'Python', 'React.js', 'Django']
     },
     {
        memName: "Abhishek",
        memPic: "./images/img1.jpeg",
        memSkill: ['C++', 'JavaScript', 'Python', 'CSS', 'React.js']
     }
]

// document.addEventListener('DOMContentLoaded', () => {
//     const teamCard = document.querySelector('.team')

//     let teamString = ''
//     let skillString = ''
//     for(let i = 0; i < teamMembers.length; i++){
//         let skill = teamMembers[i].memSkill
//         for (let j = 0; j < skill.length; j++){
//             skillString += `
//             <div class="skill">${skill[j]}</div>`
//         }
//         teamString += `
//         <div class="card">
//                     <div class="photo">
//                     <img src="${teamMembers[i].memPic}" alt="">
//                     </div>
//                     <div class="name">
//                         <h1>${teamMembers[i].memName}</h1>
//                     </div>
//                     <div class="skillset">
//                         ${skillString}
//                     </div>
//                 </div>`
        
//                 skillString = ''
//     }
// })