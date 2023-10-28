export default function (...value: string[]): string {
  return value.filter(Boolean).join(" ");
}
