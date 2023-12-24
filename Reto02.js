function manufacture(gifts, materials) {
    const charMaterials = materials.split("");
    const accepted = [];
    for (let i = 0; i < gifts.length; i++) {
        let counterOfLetter = 0;
        const giftU = new Set(gifts[i]);
        const gift = [...giftU];
        for (let j = 0; j < gift.length; j++) {
            const character = gift[j];
            for (let n = 0; n < charMaterials.length; n++) {
                if (character == charMaterials[n]) {
                    counterOfLetter++;
                    break;
                }
            }
        }
        if (counterOfLetter == gift.length) {
            accepted.push(gifts[i]);
        }
    }
    return accepted;
}
