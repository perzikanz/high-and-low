const myCard = document.getElementById('myCard');
const opponentCard = document.getElementById('opponentCard');
const message = document.getElementById('message');
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
    // console.log(randCardPath);
    // 自分のカードの画像を数字のカードに変更
    myCard.src = `card/${randCardPath}`
    // 開始ボタンを消す(is-hideクラスを開始ボタンにつける)
    document.getElementById('startButton').classList.add('is-hide');
    // Highボタンを表示(is-hideクラスをHighボタンから外す)
    document.getElementById('highButton').classList.remove('is-hide');
    // Lowボタンを表示(is-hideクラスをHighボタンから外す)
    document.getElementById('lowButton').classList.remove('is-hide');
});

document.getElementById('highButton').addEventListener('click', () => {
    // console.log("Highボタンがクリックされました");
    // カードのパスをランダムに生成
    const randCardPath = getRandCardPath();
    // 相手のカードの画像を数字のカードに変更
    opponentCard.src = `card/${randCardPath}`
    // 自分のカードの数と相手のカードの数を取得
    const myCardNum = (myCard.src).slice(-6, -4);
    const opponentCardNum = randCardPath.slice(-6, -4);
    // 自分のカードと相手のカードを比べる 相手のカードが大きければ自分の勝ち
    if (myCardNum <= opponentCardNum){
        message.textContent = "Win!";
        message.classList.remove('is-hide');
    } else {
        message.textContent = "Lose.";
        message.classList.remove('is-hide');
    }
    // Hightボタンを消して再開ボタンを表示
    document.getElementById('highButton').classList.add('is-hide');
    document.getElementById('lowButton').classList.add('is-hide');
    document.getElementById('restartButton').classList.remove('is-hide');
});

document.getElementById('lowButton').addEventListener('click', () => {
    // console.log("Lowボタンがクリックされました");
    // カードのパスをランダムに生成
    const randCardPath = getRandCardPath();
    // 相手のカードの画像を数字のカードに変更
    opponentCard.src = `card/${randCardPath}`
    // 自分のカードの数と相手のカードの数を取得
    const myCardNum = (myCard.src).slice(-6, -4);
    const opponentCardNum = randCardPath.slice(-6, -4);
    // 自分のカードと相手のカードを比べる 相手のカードが大きければ自分の勝ち
    if (myCardNum >= opponentCardNum){
        message.textContent = "Win!";
        message.classList.remove('is-hide');
    } else {
        message.textContent = "Lose.";
        message.classList.remove('is-hide');
    }
    // HightボタンとLowボタンを消して再開ボタンを表示
    document.getElementById('lowButton').classList.add('is-hide');
    document.getElementById('highButton').classList.add('is-hide');
    document.getElementById('restartButton').classList.remove('is-hide');
});

document.getElementById('restartButton').addEventListener('click', () => {
    myCard.src = opponentCard.src;
    opponentCard.src = 'card/card_back.png';
    // HightボタンとLowボタンを表示し、再開ボタンを消す
    document.getElementById('lowButton').classList.remove('is-hide');
    document.getElementById('highButton').classList.remove('is-hide');
    document.getElementById('restartButton').classList.add('is-hide');
    // 勝敗メッセージを消す
    message.classList.add('is-hide');
});