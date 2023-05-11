//since we have a parameter on the path, we will use the hook, useParams
import { useParams } from "react-router-dom";

export default function SubjectDetail() {
    //get the code from the parameter
    let {code} = useParams();

    return(
        <>
            <h1>{code}</h1>
            <p>Detail page for {code}</p>
        </>
    )

}