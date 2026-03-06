Problem link: https://algo.monster/liteproblems/271

## Problem Description

This problem asks you to design an encoding and decoding system for a list of strings. You need to implement two functions:

    encode: Takes a list of strings and converts it into a single string
    decode: Takes the encoded string and converts it back to the original list of strings

The key challenge is that the strings in the list can contain any characters, including special characters, spaces, or even characters that might typically be used as delimiters. Your encoding scheme must be able to handle all possible string contents and accurately reconstruct the original list.

Example workflow:

    Machine 1 has a list of strings like ["Hello", "World"]
    It encodes this list into a single string using your encode function
    This encoded string is sent over the network to Machine 2
    Machine 2 uses your decode function to reconstruct the exact original list ["Hello", "World"]
