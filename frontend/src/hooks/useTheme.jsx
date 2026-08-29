import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTheme } from "../slices/themeSlice"

const useTheme = () => {

    const dispatch = useDispatch();

    const theme = useSelector((state)=> state.theme.mode);

    useEffect(()=>{

        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    const changeTheme = (newTheme)=> dispatch(setTheme(newTheme));


    
  return {theme, changeTheme}
}

export default useTheme