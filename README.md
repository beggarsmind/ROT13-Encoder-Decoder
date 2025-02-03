# ROT13-Encoder-Decoder

ROT13 (short for rotate by 13 places) is a simple encryption technique that replaces each letter of the alphabet with the letter 13 positions ahead of it. It's a specific case of the Caesar cipher, where the shift value is fixed at 13.

Here’s how it works:

The alphabet is split into two halves:
First half: A to M
Second half: N to Z
When you apply ROT13 to a letter, it shifts 13 positions forward in the alphabet.
If the letter is in the first half (A to M), it becomes a letter in the second half (N to Z), and vice versa.
For example:

Encryption:
A → N, B → O, C → P, D → Q, etc.
Decryption:
Applying ROT13 again decrypts the text back to the original. Since 13 + 13 = 26 (the total number of letters in the alphabet), applying ROT13 twice results in the same original text.
Example:
Original Text: Hello
Applying ROT13:
H → U
E → R
L → Y
L → Y
O → B
Resulting Encrypted Text: Uryyb
To decrypt Uryyb:

Apply ROT13 again:
U → H
R → E
Y → L
Y → L
B → O
Resulting Decrypted Text: Hello
Key Points:
ROT13 is often used in online forums, wikis, and some chat applications to obscure spoilers, puzzle answers, or sensitive information.
It is not a secure encryption method; it's simply used to obscure text for casual purposes, as it’s easily reversible.








