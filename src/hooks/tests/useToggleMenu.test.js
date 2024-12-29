import { renderHook, act } from "@testing-library/react-native";
import useToggleMenu from "../useToggleMenu";

describe('useToggle menu hook tests', () => { 

    it('Should change the state when the associated functions are caller', () => {

        const {result} = renderHook(() => useToggleMenu())

        expect(result.current.isMenuShown).toBe(false)

        // Should set isMenuShown to true
        act(()=> {
            result.current.openMenu()
        })
        expect(result.current.isMenuShown).toBe(true)
        
        // Should set isMenuShown to true
        act(()=> {
            result.current.closeMenu()
        })
        expect(result.current.isMenuShown).toBe(false)

    })
 })