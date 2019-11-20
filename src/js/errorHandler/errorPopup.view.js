import './error.popup.scss';

export class ErrorPopup {
    constructor({ title, message, colorClass, autohideTimeMs = -1 } = {}, container = document.querySelector('.popup-container')) {
        this._init({ container, title, message, colorClass });
        this._autohideTimeMs = autohideTimeMs;
        this._closeBtn = this._popup.querySelector('.close');
        this._closeBtn.addEventListener('click', () => this.hide());
        this._titleEl = this._popup.querySelector('.title');
        this._messageEl = this._popup.querySelector('.message');
      }
    
      set title(value) {
        this._titleEl.textContent = value;
      }
    
      set message(value) {
        this._messageEl.textContent = value;
      }
    
      _init({ container, title, message, colorClass }) {
        this._popup = document.createElement('div');
        this._popup.classList.add('popup');
        this._popup.innerHTML = `
          <div class="color-stripe ${colorClass}"></div>
          <div class="content">
            <h3 class="title">${title}</h3>
            <p class="message">${message}</p>
          </div>
          <button class="close"></button>
        `;
        this.hide();
        container
          ? container.appendChild(this._popup)
          : document.body.appendChild(this._popup);
      }

      show() {
        this._popup.classList.remove('hidden');
        if (this._autohideTimeMs >= 0) {
          if (this._timeout) {
            clearTimeout(this._timeout);
          }
          
          this._timeout = setTimeout(() => this.hide(), this._autohideTimeMs);
        }
      }
    
      hide() {
        this._popup.classList.add('hidden');
      }

}