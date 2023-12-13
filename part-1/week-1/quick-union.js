// Solution for Dynamic Connectivity problem
function main(n) {
  // init idList arr - contains their parent-child connection
  // 2 nodes will be connected if they have the same root
  const idList = []
  for (let i = 0; i < 10; i++) {
    idList.push(i)
  }

  function findRoot(a) {
    while (a !== idList[a]) {
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
  // by changing id of a's root to b's root
  function union(a, b) {
    const idOfRootA = findRoot(a)
    idList[idOfRootA] = findRoot(b)
  }

  union(2,9)
  union(3, 4)
  union(4, 9)
  union(5, 6)

  console.log({idList})
  console.log(isConnected(5, 7)) // This should be false
  console.log(isConnected(5, 6)) // This should be true
  console.log(isConnected(2, 3)) // This should be true
}

main()