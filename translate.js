function translate(word) {
 word = word.toLowerCase();
 word = word.split('');
 vowelsArray = ["a","e","i","o","u"];
 for(char of word) {
     if (vowelsArray.includes(word[0])) {
         return(word.join("") + "way");
     } else if (vowelsArray.includes(char)) {
        index = word.slice(0,word.indexOf(char)).join("") +"ay";
        index2 =word.slice(word.indexOf(char),word.length).join("");
        return word = index2+index;
     } 
}
}


console.log(translate("cole"));

 module.exports = translate;