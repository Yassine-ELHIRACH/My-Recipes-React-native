import { renderHook, act } from "@testing-library/react-native"
import useSnackBarState from "../useSnackBarState"


it('Should toggle visible state', () => {
  const { result } = renderHook(() => useSnackBarState())

  expect(result.current.visible).toBe(false)

  // Should set visible to true  
  act(() => {
    result.current.showSnackBar()
  })
  expect(result.current.visible).toBe(true)

  expect(result.current.visible).toBeTruthy()

  // Should set visible to false 
  act(() => {
    result.current.onDismissSnackBar()
  })

  expect(result.current.visible).toBe(false)
  expect(result.current.visible).toBeFalsy()
})