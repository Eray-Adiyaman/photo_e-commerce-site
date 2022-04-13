export function getClass(i){
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}

// for randomizing grid sizing.used in Photos Component while mapping over the images and creating Image component.