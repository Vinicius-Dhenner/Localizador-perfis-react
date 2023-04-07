import './style.css'

type MainProps = {
    title : String;
}

export function Main ( props : MainProps ) {
    return (
        <>
            <main className="main-container">
                <div className="main-container-content">
                    <h1> {props.title} </h1>
                </div>
            </main>
        </>
    )
}