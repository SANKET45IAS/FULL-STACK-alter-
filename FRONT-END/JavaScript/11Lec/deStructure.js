let course={
    CourseName:"JS in Hindi",
    price:45,
    courseInstructor:"Hitesh"
}
let Master=course.courseInstructor;//Best way

console.log(Master);

const {courseInstructor}=course;//De strucutre
console.log(courseInstructor);

const {courseInstructor:Sir}=course;//De structure using another variable in place of courseInstructor
console.log(Sir);

