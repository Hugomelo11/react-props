import { useState } from "react";

export default function Coffee () {
    const [coffeeList, setCoffeeList] = useState();
    const getCoffee = (temperature) => {
        // fetch coffee api
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
            .then(results => results.json())
            .then(data => setCoffeeList(data))
            .catch(err => alert(err))
        // `https://api.sampleapis.com/coffee/${temperature}`
        // results -> setCoffeeList
    }
    return (
        <>
        <button onClick={() => getCoffee('hot')}>HOT</button>
        <button onClick={() => getCoffee('iced')}>ICED</button>
        <section>
            <h2>Coffee List</h2>
            {!coffeeList
            ? <p>Loading...</p>
            : coffeeList.map(coffee => (
                <p key={coffee.id}>{coffee.title}</p>
            ))
            }
        </section>
        </>
    )
}