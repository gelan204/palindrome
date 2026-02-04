const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed && cleaned.length > 0;
}

// Live checking as user types
textInput.addEventListener("input", () => {
  const value = textInput.value.trim();
  
  if (!value) {
    result.textContent = "";
    result.style.backgroundColor = "transparent";
    return;
  }

  if (isPalindrome(value)) {
    result.textContent = `"${value}" is a palindrome! 🎉`;
    result.style.backgroundColor = "#4CAF50"; // green
    result.style.color = "#fff";
    result.classList.add("flash");
  } else {
    result.textContent = `"${value}" is not a palindrome ❌`;
    result.style.backgroundColor = "#f44336"; // red
    result.style.color = "#fff";
    result.classList.add("flash");
  }

  // Remove flash after animation
  setTimeout(() => {
    result.classList.remove("flash");
  }, 300);
});
