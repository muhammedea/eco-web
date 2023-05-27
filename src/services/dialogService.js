// import { useYartuNotify } from '@yartu/ui-kit';
// import ToastService from './toastService';

/* global $snackbar */

/* Toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-bottom-center',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
}; */

// const yartuNotify = useYartuNotify();

export function info(title, desc, okText) {
  return new Promise((resolve) => {
    $snackbar.dialog({
      title,
      subtitle: desc,
      type: 'info',
      class: 'overflow-hidden',
      actionButtons: [
        {
          text: okText || 'Yes',
          color: '!bg-Primary-Blue hover:!bg-Hover-Primary-Blue',
          handler: async () => {
            resolve();
          },
        },
      ],
    });
  });
}

export function infoToast(title, desc) {
  $snackbar.snackbar({
    title: title + (desc || ''),
    type: 'info',
    duration: 5000,
    position: 'center-bottom',
  });
}

export function success(title, desc, okText) {
  return new Promise((resolve) => {
    $snackbar.dialog({
      title,
      subtitle: desc,
      type: 'success',
      class: 'overflow-hidden',
      actionButtons: [
        {
          text: okText || 'Yes',
          color: '!bg-Primary-Blue hover:!bg-Hover-Primary-Blue',
          handler: async () => {
            resolve();
          },
        },
      ],
    });
  });
}

export function successToast(title, desc) {
  $snackbar.snackbar({
    title: title + (desc || ''),
    type: 'success',
    duration: 5000,
    position: 'center-bottom',
  });
}

export function warning(title, desc, okText) {
  return new Promise((resolve) => {
    $snackbar.dialog({
      title,
      subtitle: desc,
      type: 'warning',
      class: 'overflow-hidden',
      actionButtons: [
        {
          text: okText || 'Yes',
          color: '!bg-Primary-Blue hover:!bg-Hover-Primary-Blue',
          handler: async () => {
            resolve();
          },
        },
      ],
    });
  });
}

export function warningToast(title, desc) {
  $snackbar.snackbar({
    title: title + (desc || ''),
    type: 'warning',
    duration: 5000,
    position: 'center-bottom',
  });
}

export function error(title, desc, okText) {
  return new Promise((resolve) => {
    $snackbar.dialog({
      title,
      subtitle: desc,
      type: 'error',
      class: 'overflow-hidden',
      actionButtons: [
        {
          text: okText || 'Yes',
          color: '!bg-Primary-Blue hover:!bg-Hover-Primary-Blue',
          handler: async () => {
            resolve();
          },
        },
      ],
    });
  });
}

export function errorToast(title, desc) {
  $snackbar.snackbar({
    title: title + (desc || ''),
    type: 'error',
    duration: 5000,
    position: 'center-bottom',
  });
}

export function confirm(title, desc, okText, cancelText) {
  return new Promise((resolve, reject) => {
    $snackbar.dialog({
      title,
      subtitle: desc,
      type: 'info',
      class: 'overflow-hidden',
      actionButtons: [
        {
          text: okText || 'Yes',
          color: '!bg-Primary-Blue hover:!bg-Hover-Primary-Blue',
          handler: async () => {
            resolve();
          },
        },
        {
          text: cancelText || 'No',
          color: '',
          handler: async () => {
            reject();
          },
        },
      ],
    });
  });
}

export function confirmDanger(title, desc, okText, cancelText) {
  return new Promise((resolve, reject) => {
    $snackbar.dialog({
      title,
      subtitle: desc,
      type: 'danger',
      class: 'overflow-hidden',
      actionButtons: [
        {
          text: okText || 'Yes',
          color: '!bg-Primary-Blue hover:!bg-Hover-Primary-Blue',
          handler: async () => {
            resolve();
          },
        },
        {
          text: cancelText || 'No',
          color: '',
          handler: async () => {
            reject();
          },
        },
      ],
    });
  });
}

export function prompt(title, desc, options) {
  /* const params = {
    text: text || '---',
    label: options.label,
    isInteger: options.isInteger,
    maxValue: options.maxValue,
    minValue: options.minValue,
    maxLength: options.maxLength,
    minLength: options.minLength,
    defaultValue: options.defaultValue,
    rules: options.rules,
    description: options.description,
    isNewItem: options.isNewItem,
    isOldABContent: options.isOldABContent,
  }; */
  const form = {
    model: '',
    label: options.label,
    placeholder: options.placeholder,
    rules: options.rules,
  };
  return new Promise((resolve, reject) => {
    $snackbar.dialog({
      title,
      subtitle: desc,
      type: 'info',
      class: 'overflow-hidden',
      form,
      actionButtons: [
        {
          text: 'OK',
          color: '!bg-Primary-Blue hover:!bg-Hover-Primary-Blue',
          handler: async () => {
            resolve();
          },
        },
        {
          text: 'Cancel',
          color: '',
          handler: async () => {
            reject();
          },
        },
      ],
    });
  });
}
