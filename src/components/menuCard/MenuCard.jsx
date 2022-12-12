const MenuCard = ({ menu }) => {
    return (
        <div className = 'Menu-Card'>
            <div className = 'Menu-Card-Item'>
                <h3>{menu.item}</h3>
            </div>
            <div className = 'Menu-Card-Desc'>
                <p>{menu.description}</p>
            </div>
            <div className = 'Menu-Card-Price'>
                <p>${menu.price}</p>
            </div>
        </div>
    )
}

export default MenuCard