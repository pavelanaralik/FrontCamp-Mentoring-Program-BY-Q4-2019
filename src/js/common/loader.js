export function getClassAsync(name) {
    switch (name) {
      case 'ErrorHandler':
        return import('../errorHandler/error.handler').then(({ default: ErrorHandler }) => ErrorHandler);
      default:
        break;
    }
  }