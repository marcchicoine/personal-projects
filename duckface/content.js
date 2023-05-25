function replaceImagesWithDuckFace() {
  const images = document.getElementsByTagName('img');
  const duckfaceImages = [
    'https://cdn.discordapp.com/attachments/1063138284022276130/1100830257763848233/1.jpeg',
    'https://cdn.discordapp.com/attachments/1063138284022276130/1100830258422366309/2.png',
    'https://cdn.discordapp.com/attachments/1063138284022276130/1100830258854375464/3.png',
    'https://cdn.discordapp.com/attachments/1063138284022276130/1100830259236061264/4.png',
    'https://cdn.discordapp.com/attachments/1063138284022276130/1100830259638702160/5.png',
    'https://cdn.discordapp.com/attachments/1063138284022276130/1100830260125249618/6.png',
    'https://cdn.discordapp.com/attachments/1063138284022276130/1100830260557267014/7.png',
    'https://cdn.discordapp.com/attachments/1063138284022276130/1100830260859244585/8.png',

    

    // add more images here as necessary
  ];
  for (let i = 0; i < images.length; i++) {
    const randomIndex = Math.floor(Math.random() * duckfaceImages.length);
    images[i].src = duckfaceImages[randomIndex];
  }
}

replaceImagesWithDuckFace();

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length > 0) {
      replaceImagesWithDuckFace();
    }
  });
});

observer.observe(document, { childList: true, subtree: true });
