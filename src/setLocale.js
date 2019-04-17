import locale, { createDefaultLocale } from './locale';

export default function setLocale(custom = createDefaultLocale()) {
  Object.keys(custom).forEach(type => {
    Object.keys(custom[type]).forEach(method => {
      locale[type][method] = custom[type][method];
    });
  });
}
