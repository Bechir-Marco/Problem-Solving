/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {

    let s1 = ''
    let c =0
    for (let i = 0; i < num.length; i++) {
        
        const s1 = num.substring(i, i + k);

        if ( !(/^0+$/.test(s1))) {
            
            if ((parseInt(s1) % k) === 0) {
                console.log(parseInt(s1));
                c++;      
            }
        }
       
           
    }
    return c
};
console.log(divisorSubstrings("430043",2))