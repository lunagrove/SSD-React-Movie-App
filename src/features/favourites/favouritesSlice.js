import { appStorageName } from '../../globals/globals';
import { createSlice } from '@reduxjs/toolkit';

function getFavourites(){
  let favourites = localStorage.getItem(appStorageName);
  if(favourites === null){
    favourites = [];
  }else{
    favourites = JSON.parse(favourites);
  }
  return favourites;
}

const initialState = {
  items: getFavourites()
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const newFavourites = [...state.items, action.payload];
      localStorage.setItem(appStorageName, JSON.stringify(newFavourites));
      state.items = newFavourites;
    },
    deleteFavourite: (state, action) => {
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
      state.items = itemsCopy;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addFavourite, deleteFavourite } = favouritesSlice.actions

export default favouritesSlice.reducer;