package main

import (
	"fmt"
	"strconv"
)

func main() {
	input := []string{"first", "second", "third"}

	encodedString := encode(input)

	fmt.Printf("encoded string: %s\n", encodedString)

	decodedString := decode(encodedString)

	fmt.Printf("decoded string")

	for _, output := range decodedString {
		fmt.Printf(" %s", output)
	}
}

func encode(incoming []string) string {
	encoded := ""

	for _, str := range incoming {
		prefix := paddInt(len(str))

		encoded += prefix + str
	}

	return encoded
}

func decode(incoming string) []string {
	decoded := []string{}

	i, n := 0, len(incoming)

	for i < n {
		prefix := incoming[i : i+4]
		i += 4

		length, _ := strconv.Atoi(prefix)

		word := incoming[i : i+length]

		decoded = append(decoded, word)

		i += length
	}

	return decoded
}

func paddInt(number int) string {
	st := strconv.Itoa(number)

	switch len(st) {
	case 0:
		return "0000"
	case 1:
		return "000" + st
	case 2:
		return "00" + st
	default:
		return st
	}
}
