import { createSlice } from '@reduxjs/toolkit';
import { ICard, ValidDate, Vendor } from '../card';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [
            {
                cardNumber: '9999999999999999',
                cardHolder: 'Greg Egan',
                validThru: { year: 2028, month: 4 } as ValidDate,
                ccv: 987,
                vendor: 'bitcoin' as Vendor
            }
        ],
        maxCards: 4,
        activeCardNumber: '9999999999999999'
    },
    reducers: {
        addCard: (state, action) => {
            if (state.cards.length < state.maxCards) {
                let card = action.payload as ICard;
                state.cards.push(card);
                state.activeCardNumber = card.cardNumber;
            }
        },
        setActiveCard: (state, action) => {
            state.activeCardNumber = action.payload; 
        },
        deleteActiveCard: (state) => {
            const index = state.cards.findIndex((item) => {
                return item.cardNumber === state.activeCardNumber;
            });
            state.cards.splice(index, 1);
            if (state.cards.length) state.activeCardNumber = state.cards[0].cardNumber;
        }
    }
});

export const { addCard, setActiveCard, deleteActiveCard } = cardsSlice.actions;
export default cardsSlice.reducer;