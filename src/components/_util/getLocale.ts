export function getComponentLocale(props: any, context: any, componentName: string, getDefaultLocale: () => any) {
  let locale: any = {};
  if (context && context.contextLocale && context.contextLocale[componentName]) {
    locale = context.contextLocale[componentName];
  } else {
    const defaultLocale = getDefaultLocale();
    locale = defaultLocale.default || defaultLocale;
  }

  let result = {
    ...locale
  };
  if (props.locale) {
    result = {
      ...result,
      ...props.locale
    };
    if (props.locale.lang) {
      result.lang = {
        ...locale.lang,
        ...props.locale.lang
      };
    }
  }
  return result;
}

export function getLocaleCode(context: any) {
  const localeCode = context.contextLocale && context.contextLocale.locale;
  // Had use LocaleProvide but didn't set locale
  if (context.contextLocale && context.contextLocale.exist && !localeCode) {
    return 'zh-cn';
  }
  return localeCode;
}
