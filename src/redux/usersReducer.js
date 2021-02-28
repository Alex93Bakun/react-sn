const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://lh3.googleusercontent.com/824xjLotGZ2zop5V6dvqfGv2Nn5s_gJe25mP2bufWP3ARJ2cFqxkiRH_tOGl-GTSEQFvXLsuOkE1GAHOXIrwFe1ZnHcumAc05NSv9O72jWEZksAnqzapdF9k4_hdoNYXYerbYzkiEPMYpmFtUGiVKVGF3MPnvyeX1Tm1-ByQq9fkvLYzotCVF4lzhgA6q_GICevBCMmPlyd3iV4l8HmYhYTB3vc17QNRGCNingvbsnsLXALkfxxyKbCPV2-TgknaAMtuRkJ46dq2fPk8Y71fcu6Eg5hcEqZ68oFbZp44EbtNWDY26JtBQB1Cg1E8-HUYtrM8hFvR-Gz9mOqJpLuGtKbJDp6sIHu3bN8AnxGOuIX82ewaSsnR4p9Np8-aNOzEr8rUvJSH65wriwxbLr8BnKkbzwNed1ARgy6P9N-kETJuKMi-fykt_IbFW7OGPGWwGVuwAWXou1oa1bwtAVXUGSL0uSDfx37-Pf4XX18D75lz8Z-s4Onj7s2MYoyta5htozVu_ClYsIAEnnIcJIwpMqT1ur51tzLRLqhd-2pHHJEMFOcideCaOyvkMuNMCDaIHslvNgksKE-hM_3f2dv0hj7RsjqF0CIlunHEQk66SC1jbgYgqi96n4oeBLlNaJIhNT-ymWNCmTxfa1M9mS_r4LSO5SpTJqyAfjLRWUlIi6BcRDcZuUSGSpFjzJIL=w372-h625-no?authuser=0',
            followed: false,
            fullName: 'Bakun Olexandr',
            status: 'I\'m a BIG BOSS!',
            location: {city: 'Kryvyy Rih', country: 'Ukraine'}
        },
        {
            id: 2,
            photoUrl: 'data:image/jpeg;base64,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',
            followed: false,
            fullName: 'Dmitriy Dimych',
            status: 'I\'m a little bossy',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/CDD0/production/_116888625_mediaitem116888624.jpg',
            followed: true,
            fullName: 'Prytula Sergiy',
            status: 'I\'m a TV presenter',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

/*AC - ActionCreator*/

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
