import { I18nKeyType } from 'locales'
import { useTranslation } from 'react-i18next'

// Your assign more parameters what you need
// Example: 
// type TranslateFunctionType = (i18nKey: I18nKeyType, ...) => string
type TranslateFunctionType = (i18nKey: I18nKeyType) => string

export const useAppTranslation = () => {
  // you must assign right namespace
  const { t }: { t: TranslateFunctionType } = useTranslation('common')

  return {
    t,
  }
}

// ===========================
// Example check key type hint 
const { t } = useAppTranslation()
t('profile.name')
