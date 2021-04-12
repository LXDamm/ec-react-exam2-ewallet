import { createSlice } from '@reduxjs/toolkit';
import { ICard, ValidDate } from '../card';
import { AppState } from './store';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [
            {
                cardNumber: 999999999999999,
                cardHolder: 'Greg Egan',
                validThru: { year: 2028, month: 4 } as ValidDate,
                ccv: 987,
                cardVendor: 'bitcoin',
                isActive: true
            }
        ],
        maxCards: 4
    },
    reducers: {
        addCard: (state, action) => {
            if (state.cards.length < state.maxCards) {
                state.cards.push(action.payload);
            }
        },
        setActiveCard: (state, action) => {
            const index = state.cards.findIndex((item) => {
                return item.isActive === true;
            });
            state.cards[index].isActive = false;
            const activeIndex = state.cards.findIndex((item) => {
                return item.cardNumber === action.payload;
            });
            state.cards[activeIndex].isActive = true;
        }
    }
});

export const { addCard, setActiveCard } = cardsSlice.actions;
export default cardsSlice.reducer;