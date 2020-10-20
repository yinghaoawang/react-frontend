import { createContext, useContext } from 'react';

export const ProductContext = createContext();
export function useProduct() {
    return useContext(ProductContext);
}