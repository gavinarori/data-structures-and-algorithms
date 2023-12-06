class BH {
    extractMax() {
      const max = this.values[0];
      const end = this.values.pop();
      this.values[0] = end;
  
      let index = 0;
      const length = this.values.length;
      const current = this.values[0];
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];
          if (leftChild > current) swap = leftChildIndex;
        }
        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if (
            (swap === null && rightChild > current) ||
            (swap !== null && rightChild > leftChild)
          )
            swap = rightChildIndex;
        }
  
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = current;
        index = swap;
      }
  
      return max;
    }
  }
  
  const tree = new BH();
  tree.add(3);
  tree.add(4);
  tree.add(31);
  tree.add(6);
  console.log(tree.extractMax()); // 31