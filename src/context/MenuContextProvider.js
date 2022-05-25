import React, { createContext, useContext, useState } from "react"

const MenuContext = createContext()

const MenuContextProvider = ({ children }) => {
	const [menu, setMenu] = useState(false)

	const handleMenu = () => {
		setMenu(() => {
			return !menu
		})
	}
	return (
		<>
			<MenuContext.Provider value={{menu,handleMenu}}>{children}</MenuContext.Provider>
		</>
	)
}

const useMenuContext = ()=>{
    return useContext(MenuContext)
}
export {useMenuContext}
export default MenuContextProvider
