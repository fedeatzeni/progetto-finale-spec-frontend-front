import { GlobalContext } from "../context/GlobalContext"
import { useContext } from "react"

import DetailsCard from "./DetailsCard"

export default function CompareCards() {

    const { firstItem, secondItem, resetItems } = useContext(GlobalContext)
    return (

        <div className="compare-cards">

            {!firstItem && !secondItem && <p className="alert">Seleziona 2 oggetti da comparare</p>}

            <div className="cards">
                <DetailsCard item={firstItem} />
                <DetailsCard item={secondItem} />
            </div>

            <div className="reset">
                <button onClick={resetItems}>Reset</button>
            </div>

        </div>
    )
}