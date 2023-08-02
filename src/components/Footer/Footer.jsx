

export default function Footer(){
    let date = new Date().getFullYear();
    return (
    <footer>
    <p>Copyright @ {date}</p>
    </footer>
    );
};