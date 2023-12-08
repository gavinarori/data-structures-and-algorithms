
function towerOfHanoi(n, source, target, auxiliary) {
    if (n > 0) {
        // Move n - 1 disks from source to auxiliary, so they are out of the way
        towerOfHanoi(n - 1, source, auxiliary, target);

        // Move the nth disk from source to target
        console.log('Move disk ' + n + ' from ' + source + ' to ' + target);

        // Move the n - 1 disks that we left on auxiliary to target
        towerOfHanoi(n - 1, auxiliary, target, source);
    }
}

// Example usage:
towerOfHanoi(3, 'A', 'C', 'B');  // A, B and C are the names of rods