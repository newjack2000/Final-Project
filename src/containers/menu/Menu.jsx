import { useState, useEffect } from 'react'
import { supabase } from '../../supabase/login/loginPage'
import './Menu.css'

// Components
import MenuCard from '../../components/menuCard/MenuCard'

const Menu = () => {
  const [fetchError, setFetchError] = useState(null)
  const [menu, setMenu] = useState(null)

  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase
        .from('menu')
        .select()

      if (error) {
        setFetchError('Could not fetch menu')
        setMenu(null)
        console.log(error)
      }

      if (data) {
        setMenu(data)
        setFetchError(null)
      }
    }

    fetchMenu()

  }, [])

  return (
    <main className='Menu-Container'>
      <div className = 'Main'>
        <div className = 'Main-Header'>
          <h1>Menu</h1>
        </div>

        <div className = 'Menu'>
              {fetchError && (<p>{fetchError}</p>)}
              {menu && (
                <div className = 'Menu-Card-Container'>
                  {menu.map((menu) => (
                    <MenuCard key = {menu.id} menu = {menu} />
                  ))}
                </div>
              )}
        </div>
        <div>
          
        </div>
      </div>
    </main>
  )
}

export default Menu;