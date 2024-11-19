function checkDuplicatesWithinK(arr, k) {
    let window = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is already in the set
        if (window.has(arr[i])) {
            return true;
        }
        
        // Add the current element to the set
        window.add(arr[i]);
        
        // Maintain the set size to k by removing the oldest element
        if (i >= k) {
            window.delete(arr[i - k]);
        }
    }
    return false;
}