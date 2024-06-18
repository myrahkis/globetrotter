import { useParams } from "react-router-dom";

function City() {
    const { id } = useParams();

    return(
        <div>
            <p>emoji</p>
            <p>city {id}</p>
            <p>name</p>
            <p>notes</p>
        </div>
    );
}

export default City;