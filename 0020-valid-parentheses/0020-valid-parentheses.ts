function isValid(s: string): boolean {
    if (s.length < 2) return false;

    const stack = []

    const checkIsMatchChar = (left: string, right: string) => {
        switch (left) {
            case '(':
                return right === ')'
            case '{':
                return right === '}'

            case '[':
                return right === ']'
        }
    }

    for (let i = 0; i < s.length; i++) {
        const left = stack.pop()
        const right = s[i];

        if (!left) {
            stack.push(s[i])
        }
        else {
            console.log(left, right)
            // if does not match, then push
            if (!checkIsMatchChar(left, right)) {
                stack.push(left)
                stack.push(s[i])
            }
        }
    }

    return stack.length > 0 ? false : true
};