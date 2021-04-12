export type Vendor = 'bitcoin' | 'mastercard' | 'visa' | 'dogecoin' | undefined;

export type ValidDate = {
    year: number;
    month: number;
}

export interface ICard {
    cardNumber: number;
    cardHolder: string;
    validThru: ValidDate;
    ccv: number;
    cardVendor: Vendor;
    isActive: boolean;
}