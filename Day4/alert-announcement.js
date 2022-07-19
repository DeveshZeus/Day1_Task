//Variables
let speakericon = document.querySelector(".microphone");
let announcementli = document.querySelector(".speaker-option");
let announcement_container = [...document.querySelectorAll(".announcement--container")];
let dropdown_container = [...document.querySelectorAll(".announcement-content-container")];
let bellicon = document.querySelector(".bell-svg");
let bellInList = document.querySelector(".bell-option");





//Functions for opening and closing
speakericon.addEventListener("mouseover", (e) => {
    announcement_container[1].classList.add("announcements--container--dropdown");
});
document.addEventListener('click', (event) => {
    if(!announcement_container[1].contains(event.target)){
        announcement_container[1].classList.remove("announcements--container--dropdown");
    }
});
bellicon.addEventListener("mouseover", (e) => {
    announcement_container[0].classList.add("announcements--container--dropdown");
});
document.addEventListener('click', (event) => {
    if(!announcement_container[0].contains(event.target)){
        announcement_container[0].classList.remove("announcements--container--dropdown");
    }
});






//Announcement dropdown rendering
const announceData = [
    {
        check_circle : true,
        do_not_disturb : false,
        teacher : "Wilson Kumar",
        message : "No classes will be held on 21st Nov",
        files_attached : true,
        time : "15-Sep-2018 at 07:21 pm",
        course_available : 'NO'
    },
    {
        check_circle : false,
        do_not_disturb : true,
        teacher : "Samson White",
        message : " Guest Lecture on Geometry on 20th September",
        files_attached : true,
        time : "15-Sep-2018 at 07:21 pm",
        course_available : 'NO'
    },
    {
        check_circle : true,
        do_not_disturb : false,
        teacher : "Wilson Kumar",
        message : "Additional course materials avaialable on request",
        files_attached : true,
        time : "15-Sep-2018 at 07:21 pm",
        course_available : 'Mathematic 101'
    },
    {
        check_circle : false,
        do_not_disturb : true,
        teacher : "Wilson Kumar",
        message : "No classes will be held on 25th Dec",
        files_attached : false,
        time : "15-Sep-2018 at 07:21 pm",
        course_available : 'NO'
    },
    {
        check_circle : false,
        do_not_disturb : true,
        teacher : "Wilson Kumar",
        message : "Additional course materials avaialable on request",
        files_attached : true,
        time : "15-Sep-2018 at 07:21 pm",
        course_available : 'Mathematic 101'
    }

];
function renderAnnouncement(announce){
    return `
        <div class="announcement-content ${announce.do_not_disturb ? `dnd-on` : ''}">
            <div>
                <p class="custom-font-size">
                    <span class="custom-color ">PA:</span>
                    ${announce.teacher}
                </p>
                ${announce.check_circle ? `<img src="./icons/check_circle.svg" alt="check_circle">`: `<img src="./icons/do_not_disturb.svg" alt="check_circle">`}
            </div>
            <div>
                ${announce.message}
            </div>
            ${announce.course_available === 'NO' ? `
            <div class="custom-font-size custom-color">
            </div>
            `: `
                <div class="custom-font-size custom-color">
                    Course: ${announce.course_available}
                </div>
            `}
            
            <div class="custom-font-size ">
                <span class="custom-color custom-span">
                    ${announce.files_attached ? `
                        <img src="./icons/attach_file.svg" alt="attachments" class="attach-file">
                        2 files attached
                    `:''}     
                </span>
                <span class="custom-color">
                    ${announce.time}
                </span>
            </div>
        </div>
    `
}
dropdown_container[1].insertAdjacentHTML('afterbegin', `${announceData.map(renderAnnouncement).join('')}`);

if(announcementli.lastElementChild){
    announcementli.lastElementChild.textContent = `${announceData.length}`;
}





//Notifications Rendering 
const notifications = [
    `<div class= "announcement-content dnd-on" >
        <div >
            License for Introduction to Algebra has been assigned to your school
            <img src = "./icons/do_not_disturb.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 07: 21 pm </span>
        </div>
    </div>`,
    `<div class= "announcement-content" >
        <div >
            Lesson 3 Practice Worksheet overdue for Amy Santiago
            <img src = "./icons/check_circle.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
            Course: Advanced Mathematics
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 05: 21 pm  </span>
        </div>
    </div>`,
    `<div class= "announcement-content dnd-on" >
        <div >
            23 students created
            <img src = "./icons/do_not_disturb.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 01: 21 pm </span>
        </div>
    </div>`,
    `<div class= "announcement-content dnd-on" >
        <div >
            15 submissions ready for evaluation
            <img src = "./icons/do_not_disturb.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
            Course: Basics of Algebra
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 13 - Sep - 2018 at 01: 15 pm </span>
        </div>
    </div>`,
    `<div class= "announcement-content dnd-on" >
        <div >
            License for Basic Concepts of Geometry has been assigned to your...
            <img src = "./icons/do_not_disturb.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 07: 21 pm </span>
        </div>
    </div>`,
    `<div class= "announcement-content" >
        <div >
            Lesson 3 Practice Worksheet overdue for Sam Diego
            <img src = "./icons/check_circle.svg" alt = "check_circle" >
        </div>
        <div class= "custom-font-size" >
            Course: Advanced Mathematics
        </div>
        <div class= "custom-font-size " >
            <span class="custom-color custom-span" ></span>
            <span class= "custom-color" > 15 - Sep - 2018 at 05: 21 pm </span>
        </div>
    </div>`
];
if(bellInList.lastElementChild){
    bellInList.lastElementChild.textContent = `${notifications.length}`;
}
let allNotifications = "";
for(let obj of notifications){
    allNotifications+=obj;
}
dropdown_container[0].insertAdjacentHTML('afterbegin', allNotifications);
