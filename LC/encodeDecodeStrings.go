package main

import "fmt"

func main() {
	input := []string{"first", "second", "third"}

	encodedString := encode(input)

	fmt.Printf("encoded string: %s\n", encodedString)

	decodedString := decode(encodedString)

	fmt.Printf("decoded string")

	for _, output := range decodedString {
		fmt.Printf("%s", output)
	}
}

func encode(incoming []string) string {
	return ""
}

func decode(incoming string) []string {
	decoded := []string{}

	return decoded
}
