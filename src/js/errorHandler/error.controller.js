import { ErrorPopup } from './errorPopup.view'

/**
 *Singleton implementation
 */
export default class ErrorController{
    constructor() {
        if (typeof ErrorController.instance === 'object') {
            return ErrorController.instance;
        }

        this._errorPopup = new ErrorPopup({ autohideTimeMs: 5000, colorClass: 'red', title: 'Error' });
        ErrorController.instance = this;
    }

    static getInstance() {
        return new ErrorController();
    }
    
    showError(message) {
        this._errorPopup.message = message;
        this._errorPopup.show();
    }
}