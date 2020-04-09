/* git hoooks commit-msg */
/* コミットメッセージのprefix確認 例： hoge: */
const fs = require('fs');
const boxen = require('boxen');
// プレフィックス一覧
const prefix = ['fix', 'add', 'feat', 'refactor', 'perf', 'style'];

// コミットメッセージ取得、チェック
const gitMessage = fs.readFileSync('./.git/COMMIT_EDITMSG', 'utf8').trim();
const isMissmatch = !prefix.some((str) => {
  const pattern = new RegExp(String.raw`^${str}:\s.*`, 'i');
  return gitMessage.match(pattern);
});

if (isMissmatch) {
  console.error(
    boxen('☠⚠️コミットメッセージにプレフィックスをつけてね from 高沼  prefix:半角スペース ⚠️️☠', {
      borderStyle: 'double',
      align: 'center',
    })
  );
  // 異常終了 コミット中止
  process.exit(1);
} else {
  // 正常終了
  process.exit(0);
}
