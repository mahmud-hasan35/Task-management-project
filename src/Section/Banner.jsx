import Container from "../component/Container"
import pix from '../Images/task.png';

function Banner() {
  return (

    <Container className="grid grid-cols-2 items-center">
        <div className="mt-14">
            <h1 className="text-4xl font-bold text-rose-600 dark:text-yellow-600">Task  Management</h1>
            <p className="text-lg mt-5 dark:text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
        </div>
        <div className="mx-auto mt-10">
            <img className="w-96 rounded-xl" src={pix} alt="bannar image" />
            </div>
    </Container>
    
  )
}

export default Banner