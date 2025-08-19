export type Product = {
    id: string;
    title: string;
    descrition: string;
    price: number;
    stock: number;
};
export type ItemMenu = {
    id: string;
    title: string;
    price: number;
}
export type Cake = {
    id: string;
    title: string;
    description: string;
    price_1: number;
    price_2: number;
    price_3: number;
    price_4: number;
}
export type tPromotion = {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    href:string;
}