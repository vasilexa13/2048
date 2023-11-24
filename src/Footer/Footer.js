function Footer(props) {
    return (<h2 className="best_score" >Your best score: {localStorage.getItem('bestScore')}</h2 >)
}
export default Footer;