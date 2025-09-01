function removeAds() {
  const spans = document.getElementsByTagName("span");

  for (let i = 0; i < spans.length; ++i) {
    if (spans[i].innerText === "Promoted") {
      let card = spans[i].closest(".feed-shared-update-v2");

      if (!card) {
        let j = 0;
        card = spans[i];
        while (j < 6 && card.parentNode) {
          card = card.parentNode;
          j++;
        }
      }

      if (card) {
        card.style.display = "none";
      }
    }
  }
}

removeAds();
setInterval(removeAds, 500);