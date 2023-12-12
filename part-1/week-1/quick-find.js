// Solution for Dynamic Connectivity problem
function main() {
  // init idList arr - contains their connection
  // 2 nodes will be connected if they have the same ids
  const idList = []
  for (let i = 0; i < 10; i++) {
    idList.push(i)
  }

  // check if 2 nodes is connected
  function isConnected(a, b) {
    if (a === b) return true
    return idList[a] === idList[b]
  }


  // connect 2 components at their node
  // by changing id of all connected to b nodes to id of a
  function union(a, b) {
    const idOfA = idList[a];
    for (let i = 0; i < 10; i++) {
      if (isConnected(i, b)) {
        idList[i] = idOfA
      }
    }
  }

  union(0, 6)
  union(1, 2)
  union(1, 3)
  union(2,4)
  union(5, 9)
  union(8, 9)
  union(1, 9)

  console.log({idList})
  console.log(isConnected(0, 1)) // This should be false
  console.log(isConnected(8, 5)) // This should be true
  console.log(isConnected(3, 4)) // This should be true
}

main()