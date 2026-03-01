import { Link } from "react-router";
import { ROUTES } from "../const";

export default function Favorite() {
    return (
        <>
            <h1>FavoriteRecipe</h1>
            <Link to={ROUTES.TOP}>TOP</Link>
        </>
    )
}