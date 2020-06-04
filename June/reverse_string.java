class Solution {
    public void reverseString(char[] s) {
        char temp;
        int low = 0, high = s.length-1;
        while (low < high) {
            temp = s[low];
            s[low++] = s[high];
            s[high--] = temp;
        }
    }
}

/*
Runtime: 0ms
Memory Usage: 46.1 MB
*/
