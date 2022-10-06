const observer = new MutationObserver(function (mutations, mutationInstance) {
	const modal = document.getElementsByClassName('tp-modal').length;
	if (modal > 0) {
		handleSomeDiv();
		mutationInstance.disconnect();
	}
});

observer.observe(document, {
	childList: true,
	subtree: true,
});

function handleSomeDiv() {
	document.querySelectorAll('.tp-modal').forEach((el) => el.remove());
	document.querySelectorAll('.tp-backdrop').forEach((el) => el.remove());
	document.querySelectorAll('#top').forEach((el) => el.classList.remove('tp-modal-open'));
}
