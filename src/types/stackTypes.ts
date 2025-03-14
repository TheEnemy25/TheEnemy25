export interface StackItem {
    id: string;
    text: string;
    icon: string;
    link: string;
}

export interface StackData {
    [category: string]: StackItem[];
}
