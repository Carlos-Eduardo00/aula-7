function Item({ item }) {              //Esse "item" (com "i" minusculo) dentro da função, é um "objeto" e ao mesmo tempo, uma variável.
    return (
        <li>
            <p>{item.name}</p>
        </li>
    )
}

export default Item;