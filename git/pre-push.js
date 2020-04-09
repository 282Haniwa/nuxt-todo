const execSync = require('child_process').execSync;
const boxen = require('boxen');

const branchName = execSync(`git branch --contains`)
  .toString()
  .match(/\* (?:\(no branch, rebasing )?([^)\n]+)/)[1];

if (branchName === 'develop' || branchName === 'master') {
  console.error(
    boxen(`☠⚠️⚠️⚠️${branchName}ブランチにpushしないで！！ from高沼⚠️⚠️⚠️️☠`, {
      borderStyle: 'double',
      align: 'center',
    })
  );
  // 異常終了 push中止
  process.exit(1);
} else {
  // 正常終了
  process.exit(0);
}
