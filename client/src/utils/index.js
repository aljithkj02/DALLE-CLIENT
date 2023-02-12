import FileSaver from 'file-saver'
import { surpriseMePrompts } from '../constants'
import getRelativeTime from './timeStamp'

const getRandomPrompt = (prompt)=> {
    let randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    
    if(randomIndex === prompt) getRandomPrompt(prompt);
    return randomPrompt;
}

const downloadImage = (_id, photo) => {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

export {
    getRandomPrompt,
    downloadImage,
    getRelativeTime
}