const myCard = document.getElementById('myCard');

/*
* 52種類のカードのうち1枚をランダムで取得する関数
*/
const getRandCardPath = () => {
    // 1～13の整数をランダムで生成(カードの番号用)
    const minCardNum = 1;
    const maxCardNum = 13;
    const randCardNum = Math.floor( Math.random() * (maxCardNum + 1 - minCardNum) ) + minCardNum;
    // 1～4の整数をランダムで生成(カードの絵柄用)
    const minCardSuit = 1;
    const maxCardSuit = 4;
    const randCardSuit = Math.floor( Math.random() * (maxCardSuit + 1 - minCardSuit) ) + minCardSuit;
    let cardSuitString;
    switch (randCardSuit) {
      case 1:
          cardSuitString = "card_club";
          break;
      case 2:
          cardSuitString = "card_diamond";
          break;
      case 3:
          cardSuitString = "card_heart";
          break;
      case 4:
          cardSuitString = "card_spade";
          break;
      default:
    }
    // 1～13の整数を0詰め
    const  ret = ( '00' + randCardNum ).slice( -2 )
    // カードのパスを生成
    const randCardPath = `${cardSuitString}_${ret}.png`
    return randCardPath;
}

document.getElementById('startButton').addEventListener('click', () => {
    // カードのパスをランダムに生成
    const randCardPath = getRandCardPath();
    console.log(randCardPath);
    // 自分のカードの画像を数字のカードに変更
    myCard.src = `card/${randCardPath}`
    // 開始ボタンを消す
    
    // Highボタンを表示
    
    // Lowボタンを表示
    
});