export interface Action {
    type: string;
}

export interface Response<T extends { id: string }> {
    id: string;
    data: Omit<T, 'id'>;
}
