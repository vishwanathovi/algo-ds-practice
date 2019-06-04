var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0, count = 0, maxCount = 0;
    let mapper = {};
    while(j !== s.length){
        if (!mapper[s[j]]){
            // add it to the mapper
            mapper[s[j]] = 1;
            // increment count & j
            count++;
            j++;
            maxCount = Math.max(maxCount, j-i);
        } else {
            // remove the element at ith location from mapper
            mapper[s[i]] = 0;
            // increment i
            i++;
        }
    }
    return maxCount;
};

console.log(lengthOfLongestSubstring("pwwkew"))
