(() => {
  "use strict";

  async function copyText(source, feedback) {
    if (!source.value) {
      feedback.textContent = "Build a brief first.";
      return;
    }
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(source.value);
      feedback.textContent = "Copied to clipboard.";
    } catch {
      source.focus();
      source.select();
      try {
        if (!document.execCommand("copy")) throw new Error("Copy unavailable");
        feedback.textContent = "Copied to clipboard.";
      } catch {
        feedback.textContent = "Automatic copy is unavailable. The text is selected; press Ctrl+C or Command+C.";
      }
    }
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", () => {
      const source = document.getElementById(button.dataset.copy);
      const feedback = button.parentElement.querySelector(".feedback");
      if (source && feedback) copyText(source, feedback);
    });
  });

  const form = document.getElementById("brief-form");
  if (!form) return;

  const output = document.getElementById("brief-output");
  const feedback = document.getElementById("brief-feedback");
  const copyButton = document.getElementById("copy-brief");
  const downloadButton = document.getElementById("download-brief");
  const field = (name) => form.elements.namedItem(name).value.trim();

  const invalidateBrief = () => {
    output.value = "";
    copyButton.disabled = true;
    downloadButton.disabled = true;
  };
  form.addEventListener("input", () => {
    if (output.value) feedback.textContent = "Inputs changed. Build the brief again to use your changes.";
    invalidateBrief();
    form.elements.namedItem("task").setCustomValidity("");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.elements.namedItem("task").setCustomValidity(field("task") ? "" : "Enter a task, not only spaces.");
    if (!form.reportValidity()) return;
    const task = field("task");
    const context = field("context");
    const audience = field("audience");
    const constraints = field("constraints");
    const format = field("format");
    output.value = [
      "# Prompt brief",
      "",
      "Task",
      task,
      "",
      "Context and approved sources",
      context || "[Add the facts and sources this task may use. Mark what is not yet known.]",
      "",
      "Audience",
      audience || "[Name who will read or use the result.]",
      "",
      "Constraints",
      constraints || "[State what the output must avoid, flag, or leave for approval.]",
      "",
      "Output format",
      format || "[Specify sections, length, and how evidence should be shown.]",
      "",
      "Review rule",
      "Use only approved source material. Separate facts, inferences, and unknowns. Cite the supplied sources for factual claims. A human must review the result before it is shared or used with a customer. Do not send a message or take an external action.",
    ].join("\n");
    copyButton.disabled = false;
    downloadButton.disabled = false;
    feedback.textContent = "Brief ready. Review the draft before use.";
  });

  form.addEventListener("reset", () => {
    invalidateBrief();
    form.elements.namedItem("task").setCustomValidity("");
    feedback.textContent = "Form and brief cleared.";
  });

  copyButton.addEventListener("click", () => copyText(output, feedback));
  downloadButton.addEventListener("click", () => {
    if (!output.value) return;
    const blob = new Blob([output.value + "\n"], { type: "text/markdown;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = "prompt-brief.md";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    feedback.textContent = "Markdown download started.";
  });
  // With JS unavailable the controls stay disabled, so native GET submission
  // cannot leak a user's brief into a URL, history, or server request.
  document.getElementById("brief-fields").disabled = false;
})();
