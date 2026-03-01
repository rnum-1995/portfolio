import { Link } from "react-router"
import { ROUTES } from "../const"

export default function MenuList() {
    return (
        <>
            <h1>MenuList</h1>
            <Link to={ROUTES.TOP}>TOP</Link>
        </>
    )
}
