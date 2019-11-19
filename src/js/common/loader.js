export function getClassAsync(name) {
    switch (name) {
      case 'ErrorController':
        return import('../errorHandler/error.controller').then(({ default: ErrorController }) => ErrorController);
      default:
        break;
    }
  }