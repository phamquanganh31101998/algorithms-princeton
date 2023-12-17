// Write a program to run simulation
function percolation(n) {
  /*
    * Weighted quick-union algorithms
    * */

  // init idList arr - contains their parent-child connection
  // 2 nodes will be connected if they have the same root
  const idList = []

  // count the number of node in the tree rooted at i
  const sizes = []

  for (let i = 0; i < n; i++) {
    idList.push(i)
    sizes.push(1)
  }

  function findRoot(x) {
    while (x !== idList[x]) {
      // path compression (but I'm not fully understand this)
      idList[x] = idList[idList[x]]
      x = idList[x]
    }
    return x
  }

  // check if 2 nodes is connected
  // by checking if they have the same root id
  function isConnected(a, b) {
    return findRoot(a) === findRoot(b)
  }

  // connect 2 components at their node
  // by connect root of smaller tree to the root of bigger tree (weighting)
  function union(a, b) {
    const rootOfA = findRoot(a)
    const rootOfB = findRoot(b)

    if (rootOfA === rootOfB) return

    if (sizes[rootOfA] < sizes[rootOfB]) {
      idList[rootOfA] = rootOfB
      sizes[rootOfB] += sizes[rootOfA]
    } else {
      idList[rootOfB] = rootOfA
      sizes[rootOfA] += sizes[rootOfB]
    }
  }

  /*
  * The actual simulation
  * */
}

function main() {
  const avgProbability = 0;
  // TODO: return the probability
  percolation(30)
}

main()