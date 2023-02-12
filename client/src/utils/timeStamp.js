import moment from 'moment';

 function getRelativeTime(timestamp, hours = 24) {
    const now = moment();

    if(timestamp){
        const reference = moment(timestamp);

        if (now.diff(reference, 'hour') < 1) {
    
            return now.diff(reference, 'minute') + ' min ago'
    
        } else if (now.diff(reference, 'hour') < hours) {
    
            return now.diff(reference, 'hour') + ' hr ago'
    
        } else {
    
            return reference.format('DD MMM YYYY')
        }
    }else{
        return "1 Jan 2023"
    }

}

export default getRelativeTime;