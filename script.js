function submitForm(e){
    e.preventDefault()
    const image_url = document.querySelector("#image-url").value
    const name = document.querySelector("#name-field").value
    const address = document.querySelector("#address-field").value
    const phone = document.querySelector("#phone-field").value
    const email = document.querySelector("#email-field").value
    const website = document.querySelector("#website-field").value

    // //add image url
    const imageEle = document.querySelector(".image-container img")
    imageEle.src = image_url
    
    //change name
    const nameEle = document.querySelector(".name")
    nameEle.innerText = name

    // change address
    const addressEle = document.querySelector(".value")
    addressEle.innerText = address

     // change mob
    const phoEle = document.querySelector(".value1")
    phoEle.innerText = phone

     // change email
    const emailele = document.querySelector(".value2")
    emailele.innerText = email

    // change web
    const webEle = document.querySelector(".value3")
    webEle.innerText = website



    // add skills
    const skills = document.querySelector("#skills-field").value
    const skillsArr = skills.split(',')
    console.log(skillsArr);
    let str=""
    for(let i=0;i<skillsArr.length;i++){
        str=str+`<div class="value">${skillsArr[i]}</div>`
    }
    document.querySelector(".skills-details").innerHTML=str

    //add experiences
    const experienceEle = document.getElementsByClassName("experience-input-field")
    console.log(experienceEle);
    const expHolderEle = document.getElementById("experiences-holder")
    expHolderEle.innerHTML=""
    for(let i=0;i<experienceEle.length;i++){
        const exp = experienceEle[i].value
        const newDiv = document.createElement("div")
        newDiv.innerHTML = exp
        expHolderEle.appendChild(newDiv)
    }

     //add education
    // const edu = document.getElementsByClassName("education-container-field")
    // console.log(edu);
    // const edu = document.getElementById("college-details")
    // edu.innerHTML=""
    // for(let i=0;i<edu.length;i++){
    //     const exp = edu[i].value
    //     const newDiv = document.createElement("div")
    //     newDiv.innerHTML = exp
    //     edu.appendChild(newDiv)
    // }
}
// document.getElementsByTagName("form")[0].addEventListener("submit",submitForm)


function addExperienceField(){
    const inputEle = document.createElement("input")
    inputEle.type="text"
    inputEle.className="experience-input-field"
    inputEle.id="ex-id"
    document.getElementById("experience-container-form").appendChild(inputEle)
}
// function addEducationField(){

//     const inputEle = document.createElement("input")
//     inputEle.type="text"
//     inputEle.className="education-container-field"
//     inputEle.id="ex-id"
//     document.getElementById("education-container-form").appendChild(inputEle)

// }