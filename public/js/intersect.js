

const Book = require("../../models/book");


function intersect(obj){
    // console.log(obj,"------>")
    Book.find({"day":obj.day,"lt":obj.lt},function(err,data){
        console.log(data);
    });


}

module.exports = intersect;