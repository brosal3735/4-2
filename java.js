<!-- Save as shared.js -->
<script>
// Runs on both pages
document.addEventListener("DOMContentLoaded", () => {
  // If we're on Page 1: wire up the button to save text and go to Page 2
  const input = document.getElementById("textInput");
  const btn = document.getElementById("sendBtn");
  if (input && btn) {
    btn.addEventListener("click", () => {
      const text = input.value.trim();
      sessionStorage.setItem("sharedText", text);
      // Navigate to Page 2 (adjust path if needed)
      window.location.href = "page2.html";
    });
  }

  // If we're on Page 2: read the text and display it
  const output = document.getElementById("output");
  if (output) {
    const text = sessionStorage.getItem("sharedText") || "";
    output.textContent = text ? `Hello, ${text}` : "No text was provided.";
  }
});
</script>
