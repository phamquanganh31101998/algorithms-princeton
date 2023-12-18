// Specification
// https://coursera.cs.princeton.edu/algs4/assignments/percolation/specification.php

/*
  * Weighted quick-union algorithms
  * */
class WeightedQuickUnion {
  idList = [];
  sizes = [];

  constructor(n) {
    for (let i = 0; i < n; i++) {
      this.idList.push(i)
      this.sizes.push(1)
    }
  }

  findRoot(x) {
    while (x !== this.idList[x]) {
      this.idList[x] = this.idList[this.idList[x]]
      x = this.idList[x]
    }
    return x
  }

  isConnected(x, y) {
    return this.findRoot(x) === this.findRoot(y)
  }

  union(a, b) {
    const rootOfA = this.findRoot(a)
    const rootOfB = this.findRoot(b)

    if (this.rootOfA === this.rootOfB) return

    if (this.sizes[rootOfA] < this.sizes[rootOfB]) {
      this.idList[rootOfA] = rootOfB
      this.sizes[rootOfB] += this.sizes[rootOfA]
    } else {
      this.idList[rootOfB] = rootOfA
      this.sizes[rootOfA] += this.sizes[rootOfB]
    }
  }
}

// Write a program to run simulation
class Percolation {
  grid = [];
  wqu = null;
  vertex = 0;

  // creates n-by-n grid, with all sites initially blocked
  constructor(n) {
    this.vertex = n
    this.wqu = new WeightedQuickUnion(n)

    for (let i = 0; i < n * n; i++) {
      this.grid.push(false)
    }
  }

  getPosition(row, col) {
    return this.vertex * (row - 1) + (col - 1)
  }

  // opens the site (row, col) if it is not open already
  open(row, col) {
    if (!this.isOpen(row, col)) {
      const position = this.getPosition(row, col)
      this.grid[position] = true
    }
  }

  // is the site (row, col) open?
  isOpen(row, col) {
    const position = this.getPosition(row, col)
    return this.grid[position] === true
  }

  // is the site (row, col) full?
  isFull(row, col) {

  }

  // returns the number of open sites
  numberOfOpenSites() {
    return this.grid.reduce((totalNum, currNode) => {
      return !!currNode ? totalNum + 1 : totalNum
    }, 0)
  }

  // does the system percolate?
  isPercolates() {
    // TODO: implement this
    return false
  }

  info() {
    console.log({
      vertex: this.vertex,
      grid: this.grid,
      openSites: this.numberOfOpenSites()
    })
  }
}

// helpers
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
  const n = 3
  const p = new Percolation(n)

  let time = 0

  while (!p.isPercolates() && time < 5) {
    const row = getRandomInt(1, n)
    const col = getRandomInt(1, n)
    p.open(row, col)
    time++
  }

  p.info()
}

main()