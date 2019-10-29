var makeDate = function(){
    var d = new Date();
    var formattedData = "";
    formattedData += (d.getMonth() +1)+ "_";
    formattedData += d.getDate() + "_";
    formattedData += d.getFullYear();
    return formattedData;

};
module.exports = makeDate;