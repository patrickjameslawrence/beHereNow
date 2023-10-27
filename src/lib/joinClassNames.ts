export default function(...classNames: string[]): string {
  return classNames.filter(Boolean).join(' ')
}