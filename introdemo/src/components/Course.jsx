const Course = ({courses}) =>
    {   
        return(
            <div>
            {courses.map(course=>{
            const sum = course.parts.reduce((accumulator,part) => accumulator+part.exercises,0)
               return(
                <div key = {course.id}>
                <h1>{course.name}</h1>
                <ul>{
                course.parts.map(part=><li key = {part.id}>{part.name}</li>)}
                <li>{sum}</li>
                </ul>
                </div>
                );
            })}
            </div>
        )
    }

export default Course
    