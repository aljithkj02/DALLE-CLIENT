import { surpriseMePrompts } from '../constants'

export const getRandomPrompt = (prompt)=> {
    let randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    
    if(randomIndex === prompt) getRandomPrompt(prompt);
    return randomPrompt;
}