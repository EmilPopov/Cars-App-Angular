export interface ICarsState {
    carAdded: boolean;
    carAddedId: Number;
}

export const initialState: ICarsState = {
    carAdded: false,
    carAddedId: null
}
