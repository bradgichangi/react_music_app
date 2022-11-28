export const createArtist = (data) => {
    return {
      type: 'add',
        payload: data
    }
  }
  

  
  export function useUsers() {
    return useSelector(state => state)
  }
  
  export const reducer = (state = {arr:[]}, action) => {
      switch (action.type) {
          case 'add':
              return {
                  ...state,
                  arr: state.arr.concat(action.payload)
              }

          default:
              return state
      }
  }
  
  
  