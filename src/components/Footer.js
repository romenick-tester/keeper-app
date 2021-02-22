import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <small>Copyright &copy; {currentYear}</small>
        </footer>
    )
}

export default Footer;
