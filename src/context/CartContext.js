import { useContext, createContext } from 'react';

export const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}