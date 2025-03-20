const Header = ({ text }) => {
    return (<div>
        <h1>{text}</h1>
    </div>)
}

const Part = ({ content }) => {
    return (<div>
        {content.name} {content.exercises}
    </div>)
}

const Content = ({ parts }) => {
    // remember to add `return` or do not add `{`
    const total = parts.reduce((accVal, part) => part.exercises + accVal, 0)
    return (<div>
        <div>{parts.map((x) => { return <Part key={x.id} content={x}></Part> })}</div>
        <div><b>total of {total} exercises</b></div>
    </div>)
}

const Course = ({ course }) => {
    return (<div>
        <Header text={course.name}></Header>
        <Content parts={course.parts}></Content>
    </div>)
}

export default Course