import type { MessageBlockProps } from "../types/messageBlockTypes";

export const textFix:MessageBlockProps[] = [
    {
        id: "1",
        time: "8:15",
        author: "H",        
        text: "Hello",
        isOwner: true
    },
    {
        id: "2",
        time: "9:00",
        author: "R",   
        text: "Hello",
        isOwner: false
    },
    {
        id: "3",
        time: "9:30",
        author: "H",   
        text: "How are you?",
        isOwner: true
    }
]