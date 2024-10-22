import { useEffect, useState } from "react";
import Container from "../component/Container";
import logo from "../Images/logo.png";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Header() {
    let [theme, setTheme] = useState("");

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    return (
        <div className="py-5 border dark:border-slate-900">
            <Container className="flex justify-between items-center">
                <img src={logo} className="dark:brightness-200" alt="bran logo" />

                {/* {theme ? <MdDarkMode /> : <MdLightMode/>  } */}
                <MdLightMode onClick={() => setTheme(!theme)} className={`text-2xl cursor-pointer ${theme && "text-white"}`} />
            </Container>
        </div>
    );
}

export default Header;
