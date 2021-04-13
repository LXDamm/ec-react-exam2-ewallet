export type Vendor = 'bitcoin' | 'mastercard' | 'visa' | 'dogecoin' | undefined;

export type ValidDate = {
    year: number;
    month: number;
}

export interface ICard {
    cardNumber: string;
    cardHolder: string;
    validThru: ValidDate;
    ccv: number;
    vendor: Vendor;
    isActive: boolean;
}