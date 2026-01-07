function updateTimer() {
    const now = new Date();
    
    // 日付の取得とフォーマット
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dateString = `${year}年${month}月${date}日`;
    
    // ISO形式の日付文字列（datetime属性用）
    const isoDate = now.toISOString().split('T')[0];
    
    // 曜日の取得
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    const dayIndex = now.getDay();
    const dayString = `${days[dayIndex]}曜日`;
    
    // 時間の取得とフォーマット
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // ISO形式の時刻文字列（datetime属性用）
    const isoTime = now.toISOString();
    
    // 時間表示をセパレーターで分割してより洗練された見た目に
    const timeElement = document.getElementById('time');
    timeElement.innerHTML = `${hours}<span class="separator">:</span>${minutes}<span class="separator">:</span>${seconds}`;
    timeElement.setAttribute('datetime', isoTime);
    
    // DOM要素の更新
    const dateElement = document.getElementById('date');
    dateElement.textContent = dateString;
    dateElement.setAttribute('datetime', isoDate);
    
    document.getElementById('day').textContent = dayString;
}

// 初回実行
updateTimer();

// 1秒ごとに更新
setInterval(updateTimer, 1000);
