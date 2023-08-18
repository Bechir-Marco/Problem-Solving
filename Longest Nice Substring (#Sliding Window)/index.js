
function longestNiceSubstring(s) {
    let  isNice = (sub) => {
        for (let c of sub) {

            if (!sub.includes(c.toLowerCase()) || !sub.includes(c.toUpperCase())) {
                return false;
            }
        }
        return true;
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            substring = s.substring(i, j);
            console.log('j', j);
            console.log('i', i);
            if (isNice(substring)) {
                longest = substring.length > longest.length ? substring : longest;
                console.log('sub', substring);
                console.log('l', longest);
            }
        }
    }

    return longest;
}