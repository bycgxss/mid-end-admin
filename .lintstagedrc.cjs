module.exports = {
  '*.{js,ts,vue}': ['eslint --fix', 'prettier --write'],
  '!(package)*.json': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.{css,scss,html,md}': ['prettier --write'],
}
