/* global window document alert, requestAnimationFrame */
(function main() {
  const $qid = document.getElementById.bind(document);
  // Did you know that elements that has "id" have automatic global variable?
  const { form, result } = window;
  const resultHeadline = document.createElement('h3');

  result.append(resultHeadline);

  const data = {
    name: '',
  };

  const updateResult = (name = '') => {
    data.name = name;
    requestAnimationFrame(() => {
      resultHeadline.textContent = `Your name is: ${name}`;
    });
  };

  const nameInput = $qid('name-input');

  const nameOnKeyUp = (e) => {
    console.log('name changed', e.target.value);
    updateResult(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`VanillaJS submit: ${data.name}`);
  };

  nameInput.addEventListener('keyup', nameOnKeyUp);

  form.addEventListener('submit', onSubmit);

  updateResult();
}());
