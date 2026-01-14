export function dismissView(messageData = {}) {
    if (
      window.webkit &&
      window.webkit.messageHandlers &&
      window.webkit.messageHandlers.dismissView
    ) {
      window.webkit.messageHandlers.dismissView.postMessage(messageData);
    } else if (window.Android && typeof window.Android.dismissView === 'function') {
      window.Android.dismissView(JSON.stringify(messageData));
    } else {
      console.warn('dismissView not supported on this platform.');
    }
  }