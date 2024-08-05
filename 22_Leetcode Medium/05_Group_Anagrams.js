// • Task 5: Solve the "Group Anagrams" problem on LeetCode.
// • Write a function that takes an array of strings and groups anagrams together.
// • Log the grouped anagrams for a few test cases.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groupsmap = new Map();
    let ans = [] ;

    for(let i=0 ; i<strs.length ; i++)
    {
        let word = strs[i];
        const sortedword = word.split('').sort().join('');

        if(!groupsmap.has(sortedword))
        {
            groupsmap.set(sortedword, []);
        }

        groupsmap.get(sortedword).push(strs[i]);
    } 

    for(const it of groupsmap.values()){
        ans.push(it);
    }

    return ans;
};