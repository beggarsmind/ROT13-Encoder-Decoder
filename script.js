function rot13(str) {
  return str.replace(/[A-Za-z]/g, function (char) {
    let ascii = char.charCodeAt(0);
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(((ascii - 65 + 13) % 26) + 65);
    }
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode(((ascii - 97 + 13) % 26) + 97);
    }
    return char; // Return unchanged if not a letter
  });
}

function convertROT13() {
  let inputText = document.getElementById('inputText').value;
  let outputText = rot13(inputText);
  document.getElementById('outputText').value = outputText;
}

function copyToClipboard() {
  const outputText = document.getElementById('outputText');
  outputText.select();
  document.execCommand('copy');
  alert('Text copied to clipboard');
}

// Function to open the modal
function openModal() {
  const modal = document.getElementById('infoModal');
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('infoModal');
  modal.style.display = 'none';
}

// Your existing ROT13 conversion functions (convertROT13, copyToClipboard, etc.)
