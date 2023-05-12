import { ResolveI18nKey } from 'lib/i18n'
import { trans as en } from './en'

/**
 * use to define in locale content
 */
export type LocaleType = typeof en

/**
 * use to resolve from key of locale content to key string.
 * 
 * Example: 'home.title'
 */
export type I18nKeyType = ResolveI18nKey<typeof en>

export { en }
export { trans as vi } from './vi'
