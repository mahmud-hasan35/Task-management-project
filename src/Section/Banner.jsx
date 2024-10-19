import Container from "../component/Container"
import task from '../images/task.png';

function Banner() {
  return (

    <Container className="grid grid-cols-2 items-center">
        <div className="mt-14">
            <h1 className="text-4xl font-mono font-bold text-rose-600">Task  Management</h1>
            <p className="text-lg mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
        </div>
        <div className="mx-auto">
            <img src={task} alt="bannar image" />
            </div>
    </Container>
    
  )
}

export default Banner