let courses = [
{
    id: 1,
        title: "ReactJS Tutorial",
    rating: 4.2,
},
{
    id: 2,
        title: "Angular Tutorial",
    rating: 2.5,
},
{
    id: 3,
        title: "VueJS Tutorial",
    rating: 3.8,
},
{
    id: 4,
        title: "Java Tutorial",
    rating: 4,
},
{
    id: 5,
        title: "JavaScript Tutorial",
    rating: 3.5,
},
];
//Yêu cầu 1:
console.log("Các khóa học có rating >= 4");
courses.forEach(course => {
    if(course.rating >= 4){
        console.log(course.title);
    }
});
//Yêu cầu 2:
console.log("Các khóa học có rating < 4");
let fillCourse = courses.filter(course => course.rating < 4);
fillCourse.forEach(course => {
    console.log(`${course.id} - ${course.title} - ${course.rating}`);
});
//Yêu cầu 3:
console.log("gộp 2 mảng courses và addedCourses thành mảng newCourses");
let addedCourses = [
{
    id: 6,
        title: "PHP Tutorial",
    rating: 3,
},
{
    id: 7,
        title: "C# Tutorial",
    rating: 2,
},
{
    id: 8,
        title: "Docker Tutorial",
    rating: 3.8,
}
];
let newCourses = [...courses, ...addedCourses];
console.log(newCourses);