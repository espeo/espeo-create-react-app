export interface ItemsList {
  items: { id: number; name: string }[];
}

export interface MainComponentState {
  isLoading: boolean;
  items: any;
  error: boolean;
}
