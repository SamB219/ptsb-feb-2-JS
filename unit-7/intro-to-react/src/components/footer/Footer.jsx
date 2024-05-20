

function Footer(){
    const currentYear = new Date().getFullYear(); //updates the year automatically
    return(
        <h6>Copyright {currentYear} &copy;</h6> //&copy; add the copyright symbol
    )
}


export default Footer;