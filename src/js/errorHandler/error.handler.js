import { ErrorPopup } from './errorPopup.view'
import {getClassAsync} from '../common/loader'

export async function handleError(errorMessage) {
    console.log("Error");
    const ErrorHandler = await getClassAsync('ErrorHandler');
    var errorHandler = ErrorHandler.getInstance();
    errorHandler.showError(errorMessage);
}

/**
 *Singleton implementation
 */
export default class ErrorHandler{
    constructor() {
        if (typeof ErrorHandler.instance === 'object') {
            return ErrorHandler.instance;
        }

        this._errorPopup = new ErrorPopup({ autohideTimeMs: 5000, colorClass: 'red', title: 'Error' });
        ErrorHandler.instance = this;
    }

    static getInstance() {
        return new ErrorHandler();
    }
    
    showError(message) {
        this._errorPopup.message = message;
        this._errorPopup.show();
    }
}
