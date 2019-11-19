import {getClassAsync} from './common/loader.js'

export async function handleError(errorMessage) {
    const ErrorController = await getClassAsync('ErrorController');
    var err = ErrorController.getInstance();
    err.showError(errorMessage);
}