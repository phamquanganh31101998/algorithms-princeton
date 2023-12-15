// Solution for Dynamic Connectivity problem
function main() {
  // init idList arr - contains their parent-child connection
  // 2 nodes will be connected if they have the same root
  const idList = []

  // count the number of node in the tree rooted at i
  const sizes = []

  for (let i = 0; i < 10; i++) {
    idList.push(i)
    sizes.push(1)
  }

  function findRoot(a) {
    while (a !== idList[a]) {
      // path compression (but I'm not fully understand this)
      idList[a] = idList[idList[a]]
      a = idList[a]
    }
    return a
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

  union(4,3)
  union(3, 8)
  union(6, 5)
  union(9, 4)
  union(2, 1)
  union(5, 0)
  union(7, 2)
  union(6,1)
  union(7, 3)

  console.log({idList})
  console.log({sizes})
  console.log(isConnected(5, 7)) // This should be true
  console.log(isConnected(5, 6)) // This should be true
  console.log(isConnected(2, 3)) // This should be true
}

main()