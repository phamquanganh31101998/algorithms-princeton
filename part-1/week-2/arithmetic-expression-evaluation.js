class Node {
  item;
  next;

  constructor(n) {
    this.item = n
  }
}

class Stack {
  first = null;

  constructor() {
  }

  push(item) {
    const oldFirst = this.first
    this.first = new Node(item)
    this.first.next = oldFirst
  }

  pop() {
    const lastItem = this.first.item
    this.first = this.first.next
    return lastItem
  }

  isEmpty() {
    return this.first === null
  }

  size() {
    let size = 0
    let countPointer = this.first
    while(countPointer !== null) {
      size += 1
      countPointer = countPointer.next
    }
    return size
  }
}

function calculate(x, y, operand) {
  switch (operand) {
    case '+':
      return x + y
    case '*':
      return x * y
  }
}

function isOperand(char) {
  return char === '+' || char === '*'
}

// Can we do better?
// - Number with more digit
// - More operands?

function main() {
  const valueStack = new Stack()
  const operandStack = new Stack()

  const expression = '(((1+2)*(3+4))+(5*6))'

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i]

    // skip if char is open bracket
    if (char === '(') continue

    // evaluate if char is close bracket
    if (char === ')') {
      const lastValue = valueStack.pop()
      const secondLastValue = valueStack.pop()
      const operand = operandStack.pop()
      const result = calculate(secondLastValue, lastValue, operand)

      valueStack.push(result)
      continue
    }

    // push to operand stack
    if (isOperand(char)) {
      operandStack.push(char)
      continue
    }

    // push to value stack
    valueStack.push(parseInt(char, 10))
  }

  if (valueStack.size() === 0) throw new Error('Something wrong')

  // last value in valueStack is the result
  const evaluation = valueStack.pop()
  console.log({evaluation})
}

main()