import type {Localizations} from '../lib/type'
export const countries: Localizations = {
  default: {
    country: 'FR',
    currency: 'EUR',
    isoCode: 'de-de',
    label: 'Germany (EUR €)',
    language: 'DE',
    languageLabel: 'Deutsch',
    salesChannel: 'hydrogen',
  },
  '/en': {
    country: 'US',
    currency: 'USD',
    isoCode: 'en-us',
    label: 'United States (USD $)',
    language: 'EN',
    languageLabel: 'English',
    salesChannel: 'hydrogen',
  },
}

interface Language {
  id: string
  title: string
}

export function getAllLanguages() {
  const uniqueLanguages: Language[] = []
  const seenLanguages = new Set<string>()

  for (const key in countries) {
    const language = countries[key].language
    // Remove duplicates to avoid having the same language multiple times
    if (!seenLanguages.has(language)) {
      uniqueLanguages.push({
        id: language.toLocaleLowerCase(),
        title: countries[key].languageLabel,
      })
      seenLanguages.add(language)
    }
  }

  return uniqueLanguages
}
