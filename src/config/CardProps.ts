export default interface CardProps {
    img?: string;
    cardName: string;
    index?: number;
    flipCards?: (cardName: string, index: number) => void;
    unFlippedCards?: number[];
    disabledCards?: number[];
}