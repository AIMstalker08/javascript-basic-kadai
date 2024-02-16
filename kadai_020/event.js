
const btn = document.getElementById('btn');
const text = document.getElementById('click');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});
