export let textareaHandler = (event, handleSubmit) => {
  if (!event.shiftKey && event.keyCode === 13) {
    handleSubmit();
    event.preventDefault();
  }
};