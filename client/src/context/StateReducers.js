import { reducerCases } from "./constants";

export const initialState = {
  userInfo: undefined,
  showLoginModal: false,
  showSignupModal: false,
  isSeller: false,
  gigData: undefined,
  hasOrdered: false,
  reloadReviews: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case reducerCases.TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        showLoginModal: action.showLoginModal,
      };
    case reducerCases.TOGGLE_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: action.showSignupModal,
      };
    case reducerCases.CLOSE_AUTH_MODAL:
      return {
        ...state,
        showSignupModal: false,
        showLoginModal: false,
      };
    case reducerCases.SWITCH_MODE:
      return {
        ...state,
        isSeller: !state.isSeller,
      };
    case reducerCases.SET_GIG_DATA:
      return {
        ...state,
        gigData: action.gigData,
      };

    case reducerCases.HAS_USER_ORDERED_GIG:
      return {
        ...state,
        hasOrdered: action.hasOrdered,
      };
    case reducerCases.ADD_REVIEW:
      return {
        ...state,
        gigData: {
          ...state.gigData,
          reviews: [...state.gigData.reviews, action.newReview],
        },
      };
    case reducerCases.ADD_FAVORITE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: [...state.userInfo.favorites, action.newFavorite],
        },
      };

    case reducerCases.REMOVE_FAVORITE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: state.userInfo.favorites.filter(
            (fav) => fav.gigId !== action.gigId
          ),
        },
      };

    case reducerCases.CHECK_FAVORITE:
      return {
        ...state,
        hasFavorited: action.hasFavorited,
      };

    case reducerCases.TOGGLE_FAVORITE:
      const updatedGigs = state.gigs.map((gig) =>
        gig.id === action.gigId ? { ...gig, isFavorite: !gig.isFavorite } : gig
      );
      return {
        ...state,
        gigs: updatedGigs,
      };

    default:
      return state;
  }
};

export default reducer;
