function RPN(tokens) {
    const OPERATORS = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => Math.trunc(a / b),
        "*": (a, b) => a * b,
    };


        const stack = [];

        for (const token of tokens) {
            if (token in OPERATORS) {
                const number2 = stack.pop();
                const number1 = stack.pop();
                const operation = OPERATORS[token];
                stack.push(operation(number1, number2));
            } else {
                stack.push(Number(token));
            }
        }

        return stack.pop();
    };

function RPN(tokens) {
    const OPERATORS = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => Math.trunc(a / b),
        "*": (a, b) => a * b,
    };


        let currentPosition = 0;

        while (tokens.length > 1) {
            // Move the current position pointer to the next operator.
            while (!(tokens[currentPosition] in OPERATORS)) {
                currentPosition += 1;
            }

            const operator = tokens[currentPosition];
            const operation = OPERATORS[operator];
            const number1 = Number(tokens[currentPosition - 2]);
            const number2 = Number(tokens[currentPosition - 1]);

            tokens[currentPosition] = operation(number1, number2);

            // Remove the numbers and move the pointer to the position
            // after the new number we just added.
            tokens.splice(currentPosition - 2, 2);
            currentPosition -= 1;
        }

        return tokens[0];
}