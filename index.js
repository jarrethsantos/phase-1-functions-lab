function distanceFromHqInBlocks(value) {
    const hq = 42;
    let distance;
    

    if (value > hq) {
         distance = (value - hq);
    } else if (hq > value) {
         distance = (hq - value);
    }

    return distance;
}

function distanceFromHqInFeet (value) {
    //each block in manhattan is 264 feet long
    const hq = 42;
    let distance;
    

    if (value > hq) {
         distance = (value - hq);
    } else if (hq > value) {
         distance = (hq - value);
    }
    let feet = (distance * 264)

    return feet;
}

function distanceTravelledInFeet (start, destination) {
    let blocks;
    
        if (start > destination) {
            blocks = (start - destination)
        } else if (destination > start) {
            blocks = (destination - start);
        }
    
    
    let feet = (blocks * 264);
    return feet;
}

function calculatesFarePrice (start, destination) {

    let blocks;
    
        if (start > destination) {
            blocks = (start - destination)
        } else if (destination > start) {
            blocks = (destination - start);
        }
    
    
    let feet = (blocks * 264);
    
    //first 400 feet are free.
    //distance between 400 and 2000 feet is 2c per foot. !not inclding 400!
    //flat fare of $25 if 2000-2500 feet.
    //over 2500 feeet returns 'cannot travel that far'

     if (feet < 400) {
        return 0;
    } else if (feet <= 2000) {
        return (feet - 400) * 0.02;
    } else if (feet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }

    
}
