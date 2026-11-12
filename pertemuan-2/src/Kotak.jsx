import "./Kotak.css"

const Kotak = ({ judul, children }) => {
    return (
        <div className="kotak">
            <h2>{judul}</h2>
            {children}
        </div>
    )
}

export default Kotak