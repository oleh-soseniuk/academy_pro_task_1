const forbiddenWords = ['зрада'];


module.exports.containsForbiddenWords = function(text){
    let match = [];
    for (var i = 0 ; i < forbiddenWords.length; i++) {
        if (text.indexOf(forbiddenWords[i]) !== -1) {
            match.push(forbiddenWords[i]);
        }
    }
    return match.length ? {message:"Text can not contain the following words: " + match.join(', ')} : false;
}