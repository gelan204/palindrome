   const textInput = document.getElementById("text-input");
    const checkBtn = document.getElementById("check-btn");
    const result = document.getElementById("result");
    function isPalindrome(str) {
      const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
      const reversed = cleaned.split("").reverse().join("");
      return cleaned === reversed;
    }

    checkBtn.addEventListener("click", () => {
      const value = textInput.value;

      if (!value) {
        alert("Please input a value");
        return;
      }

      if (isPalindrome(value)) {
        result.textContent = `${value} is a palindrome`;
      } else {
        result.textContent = `${value} is not a palindrome`;
      }
    });