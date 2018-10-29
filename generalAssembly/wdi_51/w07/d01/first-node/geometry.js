function area(w,h){
    return w * h 
}
 module.exports = area

//  or just create a object

module.exports = {
    area: function(w,h) {
        return w * h
    },

    diameter: function(r){
        return 2 * r
    },

    circumference: function (r){
        return 2 * r * Math.PI
    }   
}
