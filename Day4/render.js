const courseData = [
    {
        img : "./images/imageMask.png",
        topic : "Acceleration",
        isfavourite : true,
        subject : "Physics\t|\tGrade 7+\t2",
        unitName : "<b>4</b>\tUnits\t<b>18</b>\tLessons\t<b>24</b>\tTopics",
        classBy : "Mr. Frank's Class B",
        courseDur : "50 Students\t|\t21-Jan-2020\t-\t21-Aug-2020"
    },
    {
        img : "./images/imageMask-1.png",
        topic : "Displacement,Velocity and Speed",
        isfavourite : true,
        subject : "Physics\t2\t|\tGrade 6+\t<span>3</span>",
        unitName : "<b>2</b>\tUnits\t<b>15</b>\tLessons\t<b>20</b>\tTopics",
        classBy : "No Class",
        courseDur : ""

    },
    {
        img : "./images/imageMask-3.png",
        topic : "Introduction to Biology",
        isfavourite : false,
        subject : "Biology\t|\tGrade 4+\t<span>1<span>",
        unitName : "<b>5</b>\tUnits\t<b>16</b>\tLessons\t<b>22</b>\tTopics",
        classBy : "All Classes",
        courseDur : "50 Students\t|\t21-Jan-2020\t-\t21-Aug-2020"

    },
    {
        img : "./images/imageMask-2.png",
        topic : "Introduction to High School Mathematics",
        isfavourite : true,
        subject : "Physics\t|\tGrade 7+\t<span>2</span>",
        unitName : "<b>23</b>\tUnits\t<b>18</b>\tLessons\t<b>24</b>\tTopics",
        classBy : "Mr. Frank's Class A",
        courseDur : "300 Students"
    }

];
function renderCourse(course)
{
    return `
    <div class = "course1">
        <div class = "course-container">
            <div class="course-main">
                <div class="course-image">
                    <img src="${course.img}" alt="Acceleration course image">
                </div>
                <div class="course-info">
                    <div class="heading-course">
                        <h2>${course.topic}</h2>
                        ${course.isfavourite ? `<img src="./icons/favourite.svg" alt="favourite icon">` : ''}
                    </div>
                    <p class="course-writing">${course.subject}</p>
                    <p class="course-writing">${course.unitName}</p>
                    ${
                        course.classBy !== "No Class" ?
                        `
                            <select class="remove-styles course-sel" name="course-select">
                                <option value="all" selected>${course.classBy}</option>
                            </select>
                            <p class="course-writing">${course.courseDur}</p>
                        ` :
                        `
                            <select class="remove-styles course-sel" name="course-select" disabled>
                                <option value="" selected>${course.classBy}</option>
                            </select>
                            <p></p>                        `
                    } 
                </div>
            </div>
            <div class="course-footer-container">
                <div class="course-footer">
                    <img src="./icons/preview.svg" alt="Course Preview button">
                    <img src="./icons/manage_course.svg" alt="Manage courses button">
                    <img src="./icons/grade_submissions.svg" alt="Grade submissions button">
                    <img src="./icons/reports.svg" alt="reports of courses button">
                </div>
            </div>
        </div>
    </div>
    `  
}
const courseid = document.querySelector("#course-container1")
courseid.insertAdjacentHTML('beforeend', `
${courseData.map(renderCourse).join('')}
`
);
