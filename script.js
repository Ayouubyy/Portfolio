// Worked out from the birthday so the intro never goes stale.
const BIRTHDAY = new Date(2005, 9, 9); // 9 October 2005, months are 0-based

function ageOn(today) {
  const age = today.getFullYear() - BIRTHDAY.getFullYear();
  const hadBirthday =
    today.getMonth() > BIRTHDAY.getMonth() ||
    (today.getMonth() === BIRTHDAY.getMonth() && today.getDate() >= BIRTHDAY.getDate());
  return hadBirthday ? age : age - 1;
}

for (const el of document.querySelectorAll("[data-age]")) {
  el.textContent = ageOn(new Date());
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Older browsers and some embedded views block the Clipboard API.
    const active = document.activeElement;
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    active?.focus();
    if (!copied) throw new Error("Copy failed");
  }
}

for (const button of document.querySelectorAll("[data-copy]")) {
  let timer;
  button.hidden = false;
  button.addEventListener("click", async () => {
    try {
      await copyText(button.dataset.copy);
      button.textContent = "Copied";
    } catch {
      button.textContent = "Copy failed";
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      button.textContent = "Copy";
    }, 2000);
  });
}
