import en from '../messages/en.json'

type Messages = typeof en

declare global {
  interface IntlMessages {
    [key: string]: string | Messages | undefined
  }
}
