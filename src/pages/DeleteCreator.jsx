import { useNavigate } from "react-router-dom";
import { deleteCreator } from "../dataOp";
import { useEffect } from "react";

export async function action(params) {
    await deleteCreator(params);
}

export default function Delete() {
    const navigate = useNavigate();


    useEffect(() => {
        navigate('/');
        setTimeout(() =>{
            window.location.reload()
        }, 500)

    }, [navigate])

}

