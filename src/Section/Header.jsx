import Container from "../component/Container"
import logo from '../images/logo.png';
import { MdLightMode } from "react-icons/md";


function Header() {
  return (
    <div className="py-5 border">
      <Container className="flex justify-between items-center">
        <img src={logo} alt="bran logo" />
        <MdLightMode className="text-2xl"/>

      </Container>
    </div>
  )
}

export default Header